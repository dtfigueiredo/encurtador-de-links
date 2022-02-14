module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': "Lato",
      'headings': "Merriweather"
    },
    extend: {
      keyframes: {
        slideY: {
          'from': { transform: 'translateY(100px)' },
          'to': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideY: 'slideY 1000ms ease-in-out',
      }
    },
  },
  plugins: [],
}