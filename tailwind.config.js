const Color = require('color')

const COLORS = {
  PRIMARY: '#142032',
  PINK: '#f71963',
}

function generateColors(color) {
  return {
    light: Color(color).lighten(0.2).hex(),
    DEFAULT: color,
    dark: Color(color).darken(0.2).hex(),
  }
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: generateColors(COLORS.PRIMARY),
        pink: generateColors(COLORS.PINK),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
