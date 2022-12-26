/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        LibreFranklin: ["Libre Franklin", "sans-serif"],
        Lora: ["Lora", "serif"],
        Overpass: ["Overpass", "sans-serif"]
      },
      colors: {
        dark: '#121212',
      }
    },
  },
  plugins: [],
};
