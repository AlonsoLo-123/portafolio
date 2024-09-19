/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Inria Serif"', 'serif'], //Fuente Inria Serif
      },
      colors: {
        'green-lime': '#8eb54b',
      }
    },
  },
  plugins: [],
}

