/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#03363D",
        "secondary": "#174D4D",
        "tertiary": "#ced5d5",
        "special": "#e4f52f",
      }
    },
    screens: {
      'lg': { 'max': '2023px' },
      // => @media (max-width: 1023px) { ... }

      'sm': { 'max': '1000px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}