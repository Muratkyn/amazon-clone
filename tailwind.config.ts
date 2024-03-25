import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonColors: {
          default: "#131921",
          lightBlue : "#232f3e",
          backgroundColor: "#EAEDED",
          amazonYellow: "#FEBD69",
        }  
      },
    },
  },
  plugins: [],
};
export default config;
