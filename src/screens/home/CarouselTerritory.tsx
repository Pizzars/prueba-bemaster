import { useSpring, animated } from 'react-spring'
import useWindowSize from 'src/hooks/useWindowSize'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../components/texts/TitleSection'

const carouselTexts = [
  { text: 'WORLDWIDE', size: `w-[24rem] desk:w-[40rem] big:w-[43rem]` },
  { text: 'FOR EUROPE', size: `w-[24rem] desk:w-[41rem] big:w-[44rem]` },
  { text: 'FOR SPAIN', size: `w-[21rem] desk:w-[37rem] big:w-[40rem]` },
  { text: 'LATIN AMERICA', size: `w-[28rem] desk:w-[49rem] big:w-[52rem]` },
  { text: 'SPAIN & LATAM', size: `w-[28rem] desk:w-[48rem] big:w-[51rem]` }
]

const CarouselTerritory = () => {
  const size = useWindowSize()

  const fade = useSpring({
    from: {
      x: '0rem'
    },
    to: {
      x: (size?.width ?? 0) < 1024 ? `-125rem` : `-221rem`
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
          <div className='flex w-[250rem] desk:w-[442rem]'>
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
