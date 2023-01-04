import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [mdx(), compress(), robotsTxt(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
  site: "https://astro-advanced-blog-template.vercel.app",
});
