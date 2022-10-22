/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'low':'160px',
      'sone': '321px',
      'stwo':'426px',
      'sm':'550px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
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
