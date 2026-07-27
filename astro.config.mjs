import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { SITE_URL, BASE } from "./site.config.mjs";

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: "never",
  integrations: [mdx(), sitemap()],
  // Astro's CLI doesn't read process.env.PORT on its own — wire it explicitly
  // so tooling that assigns a dynamic port (e.g. when 4321 is already taken)
  // is actually honored instead of silently falling back to 4321.
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
