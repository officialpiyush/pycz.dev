import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import lagon from "@lagon/astro";
import preact from "@astrojs/preact";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), preact()],
  adapter: lagon(),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        autoInstall: true,
      }),
    ],
  },
});
