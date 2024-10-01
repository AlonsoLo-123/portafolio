/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'mainbigger': '80px', //Tamaño personalizado
        'mainbig': '64px',
        'mainsm': '52px',
        'main': '34px',
        'subbig': '32px',
        'sub': '22px',
        'contentbig': '18px',
        'content': '14px',
      },
      fontFamily: {
        'serifmain': ['"Inria Serif"', 'serif'], //Fuente Inria Serif
      },
      colors: {
        'green-lime': '#8eb54b', //Paleta de colores
        'green2-lime': '#a3c17c',
        'yellow-lime': '#FFFF20',
        'orange-lime': '#FF8000',
        'pink-lime': '#b54b8e',
        'blue-lime': '#4b88b5',
        'green3-lime': '#437943',
        'acua-lime': '#02968a',
        'sky-lime': '#0298d7',
        'red-lime': '#b2030a',
        'white-lime': '#F0F0F0',
        
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.maintext-center': {
          'text-align': 'center',
          'font-weight': 'bold',
          'font-family': 'Inria Serif, serif',
        },
        '.maintext': {
          'text-align': 'start',
          'font-weight': 'bold',
          'font-family': 'Inria Serif, serif',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

