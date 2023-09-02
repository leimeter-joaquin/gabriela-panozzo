import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

const env = loadEnv("", process.cwd(), "STORYBLOK_TOKEN");
console.log("AAAAAAAAAA", env);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,

      apiOptions: {
        region: "us",
      },
      components: {
        texto: "storyblok/Texto",
      },
    }),
  ],
});
