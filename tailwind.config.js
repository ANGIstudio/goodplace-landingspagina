module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      cabin: ['Cabin', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#179ce4',
        secondary: '#ff2a72',
        black: '#171717',
        grey: '#7E7E7E',
        lightgrey: '#9D9D9D',
        lightbeige: '#F6F6F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
