module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      jost: ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/herobackground.png')",
        people: "url('../src/assets/bgpeople.png')",
        arrow: "url('../src/assets/bg-arrow.png')",
        abouthero: "url('../src/assets/abouthero.png')",
      },
      colors: {
        green: '#BEE9D2',
        beige: '#F4F2EC',
        lightbeige: '#F8F6F1',
        orange: '#FF7541',
        darkgreen: '#42B4A7',
        lightgreen: '#D8F3E5',
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
