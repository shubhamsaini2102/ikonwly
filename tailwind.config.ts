import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        'headingFont':'48px',
        'consultfont':'88px',
        'subheading':'22px',

      },
      
      bg:{
        'bluecolor': '#00379E',
      },
      colors: {
        'bluecolor': '#00379E',
        'orange':'#FF7A00',
        'bodycolor':'#1B1B1B',
      },
      padding:{
        'padding100': '100px',
      },

    },
  },
  plugins: [],
};
export default config;
