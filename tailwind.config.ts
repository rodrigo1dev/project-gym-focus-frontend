import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#202024",
          2: "#2A2A2F",
        },
        black: {
          1: "#121214",
        },
        sky: {
          1: "#69FFD3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
