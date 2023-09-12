import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heading: ["3.5rem", { lineHeight: "1.2", fontWeight: "300" }],
        "main-header": ["2.625rem", { lineHeight: "1.2", fontWeight: "300" }],
        title: ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        paragraph: ["1.25rem", { lineHeight: "1.9", fontWeight: "400" }],
        link: ["1.125rem", { lineHeight: "1.2", fontWeight: "300" }],
        "section-header": ["3rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      colors: {
        primary: "#EBB65C",
        secondary: "#E46F62",
        accent: "#BC4E81",
        neutral: "#E0F2E9",
        "base-100": "#FDF6ED",
        "base-content": "#241023",
        "base-content-dim": "#685867",
        info: "#3271e7",
        success: "#47e68f",
        warning: "#f8b359",
        error: "#e36059",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
