const BLACK = '#222'
const WHITE = '#FFF'
const YELLOW = '#D2FF37'
const BLUE = '#46D'
const GRAY = '#333'
const YELLOW_LIME = '#D2FF37'
const PURPLE = '#4466DD'
const PURPLE_BACK = '#6f24ee'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'black-app': BLACK,
        'white-app': WHITE,
        'yellow-app': YELLOW,
        'blue-app': BLUE,
        'gray-app': GRAY,
        'yellow-lime-app': YELLOW_LIME,
        'purple-app': PURPLE,
        'purple-back-app': PURPLE_BACK
      },
      screens: {
        mobile: { max: '750px' },
        desk: '800px',
        big: '1401px',
        super: '1920px'
      }
    }
  },
  plugins: []
}
