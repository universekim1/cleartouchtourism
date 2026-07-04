// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` is required for absolute canonical URLs, Open Graph tags and the
// generated sitemap. It must match the live production domain exactly.
export default defineConfig({
  site: "https://cleartouchtourism.com",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Vercel serves both /page and /page/ as 200 (duplicate content); the
      // canonical tag uses the no-trailing-slash form, so match it here.
      serialize: (item) => ({ ...item, url: item.url.replace(/\/$/, "") }),
    }),
  ],
});
