/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1280px"
    },
    container: {
      screens: {
          sm: "600px",
          md: "900px",
          lg: "1200px"
      },
    },
    extend: {
      fontFamily: {
         
      },
    },
  },
  plugins: [],
}