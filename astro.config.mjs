import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

import vercel from "@astrojs/vercel/edge";
import lagon from "@lagon/astro";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), preact()],
  adapter: process.env.VERCEL ? vercel() : lagon(),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
});
