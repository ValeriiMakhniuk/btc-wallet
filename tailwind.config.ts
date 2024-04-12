import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        200: "#999999",
        300: "#404040",
        400: "#282828",
        500: "#1c1c1e",
        900: "#000000",
      },
      neutral: {
        300: "#e5e5e5",
        400: "#ffffff",
      },
      green: {
        400: "#31d158",
      },
    },
  },
  plugins: [],
};
export default config;
