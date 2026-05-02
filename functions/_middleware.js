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

const SITE_CONTEXT =
  'Dipankar Das is a Platform Engineer and Systems Thinker based in India, ' +
  'currently a DevOps Engineer at rtCamp and founder of ksctl — a cloud-agnostic ' +
  'Kubernetes management platform with carbon-aware provisioning across EKS, GKE, AKS, and K3s. ' +
  'He works across five intersecting domains: ' +
  '(1) Platform Engineering & DevOps — CI/CD pipelines, GitOps with ArgoCD, self-hosted runners, infrastructure automation; ' +
  '(2) Kubernetes & Cloud Infrastructure — multi-cloud cluster lifecycle, Helm, Terraform, CKA/CKAD certified; ' +
  '(3) Distributed Systems — Raft consensus datastores, actor model, gRPC, NATS event-driven architectures in Go; ' +
  '(4) Sustainable Computing — CNCF TAG Green contributor, carbon-aware provisioning, energy measurement via Kepler, Green Software Foundation alignment; ' +
  '(5) AI & Local LLM Infrastructure — builds tooling for AI agents and local inference: ' +
  'InfAI (zero-management launcher for llama.cpp with GGUF auto-detection and live metrics), ' +
  'AI Agent Evals (security-focused benchmarks testing agents on real-world incident response), ' +
  'and an AI Agents Skill Library for modular agent capability composition. ' +
  'Notable open-source products: kubmin (FinOps and SCI/SEE sustainability scoring for Kubernetes workloads), ' +
  'kli (multi-cloud Kubernetes CLI), and a WASM/Rust GPT-2 chatbot via HuggingFace. ' +
  'Active CNCF contributor with merged PRs in Kubernetes core, TAG Green, Cilium, and WASI. ' +
  'His blog covers engineering post-mortems and first-principles analysis — ' +
  'topics include OpenTelemetry, Kubernetes node sizing, local LLMs, Raft, and Go runtime internals. ' +
  'Available for consulting on Go services, platform engineering, Kubernetes architecture, and AI agent infrastructure.';

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
      title       ? `title: "${decodeEntities(title).replace(/"/g, '\\"')}"` : null,
      description ? `description: "${decodeEntities(description).replace(/"/g, '\\"')}"` : null,
      canonical   ? `canonical: "${canonical}"` : null,
      author      ? `author: "${author}"` : null,
      `site_context: "${SITE_CONTEXT}"`,
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

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
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
    // ----- data-md-skip: generic opt-out for any element -----
    .on('[data-md-skip]', skipHandler(state))
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
