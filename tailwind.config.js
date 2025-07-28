import plugin from 'tailwindcss'
import scrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['dm sans', 'sans-serif'],
        'jakarta': ['Plus jakarta sanas', 'sans-serif'],
      },
      colors:{
        'primary': '#107de5'
      }
    },
  },
  plugins: [scrollbar],
}