import { useSpring, animated } from 'react-spring'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../components/texts/TitleSection'
import { useAppSelector } from 'src/redux/hooks'

const carouselListTexts = {
  ES: [
    { text: 'MUNDIAL', size: `w-[18rem] desk:w-[33vw] big:w-[35vw] super:w-[44rem]` },
    { text: 'PARA EUROPA', size: `w-[28rem] desk:w-[49vw] big:w-[51vw] super:w-[65rem]` },
    { text: 'PARA ESPAÑA', size: `w-[28rem] desk:w-[49vw] big:w-[51vw] super:w-[65rem]` },
    { text: 'AMERICA LATINA', size: `w-[32rem] desk:w-[57vw] big:w-[59vw] super:w-[75rem]` },
    { text: 'ESPAÑA Y LATAM', size: `w-[32rem] desk:w-[60vw] big:w-[59vw] super:w-[75rem]` }
  ],
  EN: [
    { text: 'WORLDWIDE', size: `w-[24rem] desk:w-[46vw] big:w-[44vw] super:w-[55rem]` },
    { text: 'FOR EUROPE', size: `w-[24rem] desk:w-[44vw] big:w-[47vw] super:w-[55rem]` },
    { text: 'FOR SPAIN', size: `w-[21rem] desk:w-[40vw] big:w-[42vw] super:w-[48rem]` },
    { text: 'LATIN AMERICA', size: `w-[28rem] desk:w-[55vw] big:w-[56vw] super:w-[68rem]` },
    { text: 'SPAIN & LATAM', size: `w-[28rem] desk:w-[56vw] big:w-[56vw] super:w-[68rem]` }
  ]
}

const CarouselTerritory = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const carouselTexts = carouselListTexts[currentLanguage]
  // const widthScreen = size?.width ?? 0

  const fade = useSpring({
    from: {
      x: '0%'
    },
    to: {
      x: '-50%'
    },
    loop: true,
    config: {
      duration: 30000
    }
  })

  return (
    <div className='my-8 w-full overflow-hidden flex'>
      <animated.div style={fade} className='overflow-x-visible flex'>
        <div className='flex w-fit'>
          {carouselTexts.map((text, i) => {
            return (
              <div
                className={`mx-8 desk:mx-16 big:mx-24 w-fit cursor-pointer cursor`}
                key={`item1-${i}`}
              >
                <TitleSection
                  text={text.text}
                  className='w-fit flex whitespace-nowrap cursor dark-cursor'
                  color={TextColors.white}
                />
              </div>
            )
          })}
        </div>
        <div className='flex w-fit'>
          {carouselTexts.map((text, i) => {
            return (
              <div
                className={`mx-8 desk:mx-16 big:mx-24 w-fit cursor-pointer cursor`}
                key={`item1-${i}`}
              >
                <TitleSection
                  text={text.text}
                  className='w-fit flex whitespace-nowrap cursor dark-cursor'
                  color={TextColors.white}
                />
              </div>
            )
          })}
        </div>
      </animated.div>
    </div>
  )
}

export default CarouselTerritory
