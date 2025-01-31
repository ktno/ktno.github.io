import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#AAAAAA",
        "gray-200": "#808080",
        "gray-300": "#3B3B3B",
        ivory: "#fffff0",
        black: "#10100F",
      },
      backgroundImage: {
        noise: "url('/noise.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
