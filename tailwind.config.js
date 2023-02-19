/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ttt-light': '#C7D5C8',
        'ttt-navi': '#626CA1',
        'ttt-blue': '#3A3E55',
        'ttt-sky': '#587BD8',
      }
    },
  },
  plugins: [],
}