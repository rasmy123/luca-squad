import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "320px",
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        ls: {
          primary: "#1A1A1A",
          secondary: "#E5E3DF",
        },
      },
      gridTemplateColumns: {
        fill: "repeat(auto-fill,minmax(0,1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
