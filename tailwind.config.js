module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif']
      },
      colors: {
        primary: '#16405B'
      },
      boxShadow: {
        '3xl': '0 0 0 2px #16405B',
        'arrow': '0px 0px 35px -3px #16405B'
      },
      transitionProperty: {
        'width': 'width',
      }, 
      keyframes: {
        model: {
          '0%': { top: '-200px', opacity: '0' },
          '100%': { top: '0px', opacity: '1' },
        }
      },
      animation: {
        'model-smooth': 'model .3s ease-in-out',
      },
    },
    screens: {
      'mn': '300px',
      'sd': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '910px',
      'xl': '1024px',
      '2xl': '1300px'
    }
  },
  plugins: []
}