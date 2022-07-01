/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        newGreen: {
          800: '#3D8168',
        },
        newGray: {
          800: '#6C7289',
        },
        newBlack: {
          800: '#1C232B',
        },
        newAmber: {
          800: '#F2EAE2',
        },
      },
      fontFamily: {
        fraunces: ['"Fraunces"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
