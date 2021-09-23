module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#52B7AB',
        secondary: '#F6F6F6',
        black: '#171717',
        grey: '#7E7E7E',
        lightgrey: '#9D9D9D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
