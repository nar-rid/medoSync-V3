const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./layout/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
        lghtblue: '#00A7E1',
        drkblue: '#111C4E'
    },
      fontFamily:{
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
