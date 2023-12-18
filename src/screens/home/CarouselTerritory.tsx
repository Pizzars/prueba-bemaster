import { useSpring, animated } from 'react-spring'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../components/texts/TitleSection'

const carouselTexts = [
  { text: 'WORLDWIDE', size: 40 },
  { text: 'FOR EUROPE', size: 41 },
  { text: 'FOR SPAIN', size: 38 },
  { text: 'LATIN AMERICA', size: 49 },
  { text: 'SPAIN & LATAM', size: 48 }
]

const CarouselTerritory = () => {
  const fade = useSpring({
    from: {
      x: '0rem'
    },
    to: {
      x: `-221rem`
    },
    loop: true,
    config: {
      duration: (carouselTexts.length ?? 0) * 5000
    }
  })

  return (
    <div className='my-8 w-full overflow-hidden'>
      <div className='w-full overflow-hidden'>
        <animated.div style={fade} className='flex '>
          <div
            className='flex '
            style={{
              width: `442rem`
            }}
          >
            {carouselTexts.map((text, i) => {
              return (
                <div
                  style={{
                    width: `${text.size}rem`
                  }}
                  key={`item1-${i}`}
                >
                  <TitleSection text={text.text} color={TextColors.white} />
                </div>
              )
            })}
            {carouselTexts.map((text, i) => {
              return (
                <div
                  style={{
                    width: `${text.size}rem`
                  }}
                  key={`item2-${i}`}
                >
                  <TitleSection text={text.text} color={TextColors.white} />
                </div>
              )
            })}
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default CarouselTerritory
