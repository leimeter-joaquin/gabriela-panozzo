import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

const env = loadEnv("", process.cwd(), "STORYBLOK_TOKEN");
console.log("AAAAAAAAAA", env);

// https://astro.build/config
export default defineConfig({
  output: process.env.PUBLIC_ENV === "preview" ? "server" : "static",
  adapter: process.env.PUBLIC_ENV === "preview" ? vercel() : undefined,
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    tailwind(),
    storyblok({
      bridge: process.env.PUBLIC_ENV !== "production",

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
