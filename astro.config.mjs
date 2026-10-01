// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://purevuewindows.co.uk",
  integrations: [
    sitemap({
      // The thank-you page is only reached after sending the quote form
      filter: (page) => !page.includes("/thank-you"),
    }),
  ],
});
