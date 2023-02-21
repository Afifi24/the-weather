/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        weaher:"url('./images/img1.jpg')"
      },
      fontFamily:{
        Montserrat:['Montserrat']
      }
    },
  },
  plugins: [],
}
