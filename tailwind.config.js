const Color = require('color')

const COLORS = {
  PRIMARY: '#142032',
  BLUE: '#03044e',
  PINK: '#f71963',
  GRAY: '#727273',
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
        gray: generateColors(COLORS.GRAY),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
