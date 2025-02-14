/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}