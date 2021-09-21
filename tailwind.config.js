module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    FontFamily: {
      cabin: ['Cabin', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#179ce4',
        secondary: '#ff2a72',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
