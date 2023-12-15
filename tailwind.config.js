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
      },
      fontSize : 
      {
        '10xl' : "10rem",
        '12xl' : "20rem",
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 4s ease infinite alternate',
      },
    },
  },
  plugins: [],
}

