// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://dipankar-das.com",
  integrations: [mermaid({ theme: "default", autoTheme: true }), mdx(), sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes("/diary/") && !page.includes("/404"),
    }), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: "rose-pine-dawn",
        dark: "rose-pine-dawn",
      },
      wrap: true,
    },
  },
});
