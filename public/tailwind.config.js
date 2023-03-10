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
        PTSerif: ["PT Serif", "serif"],
      },
      colors: {
        dark: '#121212',
      }
    },
  },
  plugins: [],
};
