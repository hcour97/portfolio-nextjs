/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          500: "#a2c11c",
          250: "#d0e964",
        },
        light:  "#e0e0e0",
        dark: "#283739",
        navy: "#2c5d63"
        
      }, 
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
};
