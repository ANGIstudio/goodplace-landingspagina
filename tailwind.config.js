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
        darkgreen: '#0B7C68',
        lightgreen: '#F7FBF9',
        brown: '#f4f2ec',
        black: '#171717',
        grey: '#7E7E7E',
        lightgrey: '#9D9D9D',
      },
      lineHeight: {
        3: '14px',
        4: '16px',
        5: '18px',
        6: '20px',
        7: '24px',
        8: '40px',
        9: '54px',
        10: '96px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
