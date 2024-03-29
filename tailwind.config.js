module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      jost: ['Raleway', 'sans-serif'],
    },
    extend: {
      spacing: {
        '105px': '104px'
      }, 
      backgroundPosition: {
        leftcustom: "left",
      },
      backgroundImage: {
        hero: "url('../src/assets/herobackground.png')",
        campaigntemplate: "url('../src/assets/campaign.jpeg')",
        campaignhands: "url('../src/assets/campaign_hands.png')",
        campaign_1: "url('../src/assets/Themacampagne_dec_23/campagnebeeld_1.png')",
        campaign_2: "url('../src/assets/Themacampagne_dec_23/campagnebeeld_kind.png')",
        people: "url('../src/assets/bgpeople.png')",
        arrow: "url('../src/assets/bg-arrow.png')",
        abouthero: "url('../src/assets/abouthero.png')",
        howitworks1: "url('../src/assets/howto_background_1.png')",
        howitworks2: "url('../src/assets/howto_background_2.png')",
        howitworks3: "url('../src/assets/howto_background_3.png')",
        usps: "url('../src/assets/usps.png')",
        feedback: "url('../src/assets/feedback.png')",
        missie: "url('../src/assets/missie.png')",
        banner: "url('../src/assets/banner.png')",
        banner_wwf: "url('../src/assets/goede_doelen/banner_wwf.jpg')",
      },
      colors: {
        white: '#FFFFFF',
        beige: '#F4F2EC',
        lightbeige: '#F8F6F1',
        black: '#000000',
        grey: '#7E7E7E',
        lightgrey: '#9D9D9D',
        lightgreen: '#D8F3E5',
        mediumgreen: '#D8F3E5',
        green: '#BEE9D2',
        darkgreen: '#52B7AB',
        darkestgreen: '#00968B',
        lightorange: '#FBEDDC',
        mediumorange: '#FFD8BB',
        semidarkorange: '#FAC299',
        darkorange: '#FB6B47',
        pink: '#ECD0E7'
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
