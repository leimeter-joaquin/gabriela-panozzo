import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), ["STORYBLOK_TOKEN", "IS_PREVIEW"]);

const output = env.IS_PREVIEW === "true" ? "server" : "static";
const adapter = env.IS_PREVIEW === "true" ? vercel() : undefined;

// https://astro.build/config
export default defineConfig({
  output,
  adapter,
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    storyblok({
      bridge: env.IS_PREVIEW,

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
