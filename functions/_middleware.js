/**
 * Cloudflare Pages middleware: content negotiation for text/markdown.
 *
 * When a request includes `Accept: text/markdown`, returns a markdown
 * representation of the HTML response with:
 *   Content-Type: text/markdown; charset=utf-8
 *   x-markdown-tokens: <estimated token count>
 *
 * All other requests pass through unmodified.
 */

export async function onRequest(context) {
  const accept = context.request.headers.get('Accept') ?? '';
  if (!accept.includes('text/markdown')) {
    return context.next();
  }

  const response = await context.next();
  const ct = response.headers.get('Content-Type') ?? '';
  if (!ct.includes('text/html')) {
    return response;
  }

  const markdown = await convertToMarkdown(response);
  const tokens = Math.ceil(markdown.length / 4);

  return new Response(markdown, {
    status: response.status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
    },
  });
}

// ---------------------------------------------------------------------------
// HTML → Markdown via HTMLRewriter
// ---------------------------------------------------------------------------

class ConversionState {
  constructor() {
    this.parts = [];
    this.skip = 0;   // depth counter for elements whose content we drop
    this.pre = 0;    // depth counter for <pre> (preserve whitespace)
    this.pendingNL = 0;
    this.lists = []; // stack of {type: 'ul'|'ol', n: number}
    // front-matter fields extracted from <head>
    this.meta = { title: '', description: '', canonical: '', author: '' };
    this.captureMeta = null; // which meta field is being captured
  }

  push(text) {
    if (this.skip > 0) return;
    if (this.pendingNL > 0) {
      this.parts.push('\n'.repeat(this.pendingNL));
      this.pendingNL = 0;
    }
    this.parts.push(text);
  }

  nl(n = 1) {
    if (this.skip > 0) return;
    this.pendingNL = Math.max(this.pendingNL, n);
  }

  result() {
    const body = this.parts.join('').replace(/\n{3,}/g, '\n\n').trim();
    const { title, description, canonical, author } = this.meta;
    const fm = [
      '---',
      title       ? `title: "${title.replace(/"/g, '\\"')}"` : null,
      description ? `description: "${description.replace(/"/g, '\\"')}"` : null,
      canonical   ? `canonical: "${canonical}"` : null,
      author      ? `author: "${author}"` : null,
      '---',
    ].filter(Boolean).join('\n');
    return `${fm}\n\n${body}`;
  }
}

function skipHandler(state) {
  return {
    element(el) {
      state.skip++;
      el.onEndTag(() => { state.skip--; });
    },
  };
}

function headingHandler(state, level) {
  const prefix = '#'.repeat(level) + ' ';
  return {
    element(el) {
      state.nl(2);
      state.push(prefix);
      el.onEndTag(() => state.nl(2));
    },
  };
}

async function convertToMarkdown(response) {
  const state = new ConversionState();

  const rewriter = new HTMLRewriter()
    // ----- extract meta from <head> before skipping body -----
    .on('title', {
      element() { state.captureMeta = 'title'; },
      text(t) {
        if (state.captureMeta === 'title') state.meta.title += t.text;
        if (t.lastInTextNode) state.captureMeta = null;
      },
    })
    .on('meta[name="description"]', {
      element(el) { state.meta.description = el.getAttribute('content') ?? ''; },
    })
    .on('meta[name="author"]', {
      element(el) { state.meta.author = el.getAttribute('content') ?? ''; },
    })
    .on('link[rel="canonical"]', {
      element(el) { state.meta.canonical = el.getAttribute('href') ?? ''; },
    })
    // ----- skip entirely -----
    .on('head',   skipHandler(state))
    .on('script', skipHandler(state))
    .on('style',  skipHandler(state))
    .on('nav',    skipHandler(state))
    .on('footer', skipHandler(state))
    // ----- headings -----
    .on('h1', headingHandler(state, 1))
    .on('h2', headingHandler(state, 2))
    .on('h3', headingHandler(state, 3))
    .on('h4', headingHandler(state, 4))
    .on('h5', headingHandler(state, 5))
    .on('h6', headingHandler(state, 6))
    // ----- paragraphs / block -----
    .on('p', {
      element(el) {
        state.nl(2);
        el.onEndTag(() => state.nl(2));
      },
    })
    .on('blockquote', {
      element(el) {
        state.nl(2);
        state.push('> ');
        el.onEndTag(() => state.nl(2));
      },
    })
    .on('hr', {
      element() {
        state.nl(2);
        state.push('---');
        state.nl(2);
      },
    })
    .on('br', {
      element() {
        state.push('\n');
      },
    })
    // ----- code -----
    .on('pre', {
      element(el) {
        state.nl(2);
        state.push('```\n');
        state.pre++;
        el.onEndTag(() => {
          state.pre--;
          state.push('\n```');
          state.nl(2);
        });
      },
    })
    .on('code', {
      element(el) {
        if (state.pre === 0) {
          state.push('`');
          el.onEndTag(() => state.push('`'));
        }
      },
    })
    // ----- inline formatting -----
    .on('strong', {
      element(el) {
        state.push('**');
        el.onEndTag(() => state.push('**'));
      },
    })
    .on('b', {
      element(el) {
        state.push('**');
        el.onEndTag(() => state.push('**'));
      },
    })
    .on('em', {
      element(el) {
        state.push('*');
        el.onEndTag(() => state.push('*'));
      },
    })
    .on('i', {
      element(el) {
        state.push('*');
        el.onEndTag(() => state.push('*'));
      },
    })
    // ----- links -----
    .on('a', {
      element(el) {
        const href = el.getAttribute('href');
        if (href && !href.startsWith('#')) {
          state.push('[');
          el.onEndTag(() => state.push(`](${href})`));
        }
      },
    })
    // ----- images -----
    .on('img', {
      element(el) {
        const alt = el.getAttribute('alt') ?? '';
        const src = el.getAttribute('src') ?? '';
        if (src) state.push(`![${alt}](${src})`);
      },
    })
    // ----- lists -----
    .on('ul', {
      element(el) {
        state.lists.push({ type: 'ul', n: 0 });
        el.onEndTag(() => {
          state.lists.pop();
          state.nl(2);
        });
      },
    })
    .on('ol', {
      element(el) {
        state.lists.push({ type: 'ol', n: 0 });
        el.onEndTag(() => {
          state.lists.pop();
          state.nl(2);
        });
      },
    })
    .on('li', {
      element(el) {
        const list = state.lists[state.lists.length - 1];
        const indent = '  '.repeat(Math.max(0, state.lists.length - 1));
        state.nl(1);
        if (list?.type === 'ol') {
          list.n++;
          state.push(`${indent}${list.n}. `);
        } else {
          state.push(`${indent}- `);
        }
        el.onEndTag(() => state.nl(1));
      },
    })
    // ----- section wrappers (soft block boundary) -----
    .on('div',     { element(el) { state.nl(1); el.onEndTag(() => state.nl(1)); } })
    .on('section', { element(el) { state.nl(1); el.onEndTag(() => state.nl(1)); } })
    .on('article', { element(el) { state.nl(1); el.onEndTag(() => state.nl(1)); } })
    .on('main',    { element(el) { state.nl(1); el.onEndTag(() => state.nl(1)); } })
    // ----- all text nodes -----
    .on('*', {
      text(t) {
        if (state.skip > 0) return;
        const raw = t.text;
        const text = state.pre > 0 ? raw : raw.replace(/\s+/g, ' ');
        if (text.trim() || (state.pre > 0 && raw.length)) {
          state.push(text);
        }
      },
    });

  // Consume the transformed stream to fire all handlers
  await rewriter.transform(response).text();

  return state.result();
}
