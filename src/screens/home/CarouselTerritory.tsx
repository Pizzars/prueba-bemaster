import { useSpring, animated } from 'react-spring'
import useWindowSize from 'src/hooks/useWindowSize'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../components/texts/TitleSection'

const carouselTexts = [
  { text: 'WORLDWIDE', size: `w-[24rem] desk:w-[46vw] big:w-[44vw] super:w-[55rem]` },
  { text: 'FOR EUROPE', size: `w-[24rem] desk:w-[44vw] big:w-[47vw] super:w-[55rem]` },
  { text: 'FOR SPAIN', size: `w-[21rem] desk:w-[40vw] big:w-[42vw] super:w-[48rem]` },
  { text: 'LATIN AMERICA', size: `w-[28rem] desk:w-[55vw] big:w-[56vw] super:w-[68rem]` },
  { text: 'SPAIN & LATAM', size: `w-[28rem] desk:w-[56vw] big:w-[56vw] super:w-[68rem]` }
]

const CarouselTerritory = () => {
  const size = useWindowSize()

  const widthScreen = size?.width ?? 0

  const fade = useSpring({
    from: {
      x: '0rem'
    },
    to: {
      x:
        widthScreen < 1024
          ? `-125rem`
          : widthScreen < 1401
          ? `-241vw`
          : widthScreen < 1401
          ? `-245vw`
          : `-294rem`
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
          <div className='flex w-[250rem] desk:w-[482vw] big:w-[490vw] super:w-[588rem]'>
            {carouselTexts.map((text, i) => {
              return (
                <div className={text.size} key={`item1-${i}`}>
                  <TitleSection text={text.text} color={TextColors.white} />
                </div>
              )
            })}
            {carouselTexts.map((text, i) => {
              return (
                <div className={text.size} key={`item2-${i}`}>
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
