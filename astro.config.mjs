import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  adapter: vercel()
});