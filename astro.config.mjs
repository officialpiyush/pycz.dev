import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import UnoCSS from "unocss/astro";

import vercel from "@astrojs/vercel/edge";
import lagon from "@lagon/astro";

export default defineConfig({
  output: "server",
  integrations: [UnoCSS({
    injectReset: true,
  }), preact()],
  adapter: process.env.VERCEL ? vercel() : lagon(),
});
