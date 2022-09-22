/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {fontFamily: {
      new: ['Edu NSW ACT Foundation', 'cursive'],
      big :['Bebas Neue', 'cursive'],
      Name :['Montserrat'],
      Detail :['Quicksand'],
      Para :['Poppins'],
     },
    },
  },
  plugins: [],
}
