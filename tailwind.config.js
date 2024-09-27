/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": "#0B131E",
        "secondary": "#202B3B"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

