import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import preact from "@astrojs/preact";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), preact()],
  adapter: vercel(),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
});
