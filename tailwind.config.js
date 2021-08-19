module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#142032',
        pink: {
          light: '#fff3f6',
          DEFAULT: '#f71963',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
