/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      serif: ['"Inria Serif"', 'serif'], //Fuente Inria Serif
      },
    },
  },
  plugins: [],
}

