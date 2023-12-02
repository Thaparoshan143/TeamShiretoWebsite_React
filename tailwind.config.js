/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : 
      {
        "theme" : "#ff0000",
        "theme-alt" : "#ff0000aa",
        "theme-alth" : "#ff000077",
      }
    },
  },
  plugins: [],
}

