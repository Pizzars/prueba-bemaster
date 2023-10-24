const BLACK = '#222'
const WHITE = '#FFF'
const YELLOW = '#D2FF37'
const BLUE = '#46D'
const GRAY = '#333'
const YELLOW_LIME = '#D2FF37'
const PURPLE = '#4466DD'

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
      },
      screens: {
        desk: '1023px',
        big: '1401px'
      },
      fontSize: {
        larger: 'clamp(38px, 11.6vw, 48px)',
        big: 'clamp(32px, 9.2vw, 38px)',
        medium: 'clamp(16px, 4.6vw, 22px)',
        small: 'clamp(8px, 3.4vw, 14px)',
        little: 'clamp(6px, 2.8vw, 12px)'
      },
      lineHeight: {
        larger: 'clamp(33px, 11vw, 43.2px)',
        big: 'clamp(28.2px, 7.5vw, 34.2px)',
        medium: 'clamp(13.8px, 4vw, 19.8px)',
        small: 'clamp(8px, 3.4vw, 14px)',
        little: 'clamp(6px, 2.8vw, 12px)'
      }
    }
  },
  plugins: []
}
