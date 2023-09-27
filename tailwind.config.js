const BLACK = '#222'
const WHITE = '#FFF'
const YELLOW = '#D2FF37'
const BLUE = '#46D'
const GRAY = '#333'

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
        'gray-app': GRAY
      }
    }
  },
  plugins: []
}
