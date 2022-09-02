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
      },
    },
    screens: {
      'sm': '415px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [],
}