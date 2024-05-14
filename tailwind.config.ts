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
        'listfont':'28px',
        'consultfont':'88px',
        'subheading':'22px',
        'max-lg':'50px',
        'ipad-body':'17px',
        'ipadheadingFont':'38px',

      },
      
      bg:{
        'bluecolor': '#00379E',
      },
      colors: {
        'bluecolor': '#00379E',
        'orange':'#FF7A00',
        'bodycolor':'#1B1B1B',
        'bordercolor':"#ddd",
        'placehlder':"#1B1B1B70",
        'max-lg':''
      },
      padding:{
        'buttonXpadding':'40px',
        'buttonYpadding':'17px',
        'padding100': '100px',
      },

    },
  },
  plugins: [],
};
export default config;
