import { useSpring, animated } from 'react-spring'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../components/texts/TitleSection'
import { useAppSelector } from 'src/redux/hooks'
import { useState } from 'react'
import UseDevice from 'src/hooks/useDevice'

const carouselListTexts = {
  ES: [
    {
      option: 'worldwide',
      text: 'MUNDIAL',
      size: `w-[18rem] desk:w-[33vw] big:w-[35vw] super:w-[44rem]`
    },
    {
      option: 'europe',
      text: 'EUROPA',
      size: `w-[28rem] desk:w-[49vw] big:w-[51vw] super:w-[65rem]`
    },
    {
      option: 'spain',
      text: 'ESPAÑA',
      size: `w-[28rem] desk:w-[49vw] big:w-[51vw] super:w-[65rem]`
    },
    {
      option: 'latin_america',
      text: 'AMERICA LATINA',
      size: `w-[32rem] desk:w-[57vw] big:w-[59vw] super:w-[75rem]`
    },
    {
      option: 'spain_and_latin_america',
      text: 'ESPAÑA Y LATAM',
      size: `w-[32rem] desk:w-[60vw] big:w-[59vw] super:w-[75rem]`
    }
  ],
  EN: [
    {
      option: 'worldwide',
      text: 'WORLDWIDE',
      size: `w-[24rem] desk:w-[46vw] big:w-[44vw] super:w-[55rem]`
    },
    {
      option: 'europe',
      text: 'EUROPE',
      size: `w-[24rem] desk:w-[44vw] big:w-[47vw] super:w-[55rem]`
    },
    {
      option: 'spain',
      text: 'SPAIN',
      size: `w-[21rem] desk:w-[40vw] big:w-[42vw] super:w-[48rem]`
    },
    {
      option: 'latin_america',
      text: 'LATIN AMERICA',
      size: `w-[28rem] desk:w-[55vw] big:w-[56vw] super:w-[68rem]`
    },
    {
      option: 'spain_and_latin_america',
      text: 'SPAIN & LATAM',
      size: `w-[28rem] desk:w-[56vw] big:w-[56vw] super:w-[68rem]`
    }
  ]
}

interface Params {
  setFilter?: (option: string) => void
}

const CarouselTerritory = ({ setFilter }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const carouselTexts = carouselListTexts[currentLanguage]
  const [pause, setPause] = useState(false)
  const isMobile = UseDevice()

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
    },
    pause: pause
  })

  const Items = () => {
    return (
      <div className='flex w-fit'>
        {carouselTexts.map((text, i) => {
          return (
            <div className={`mx-8 desk:mx-16 big:mx-24 w-fit relative`} key={`item1-${i}`}>
              <TitleSection
                text={text.text}
                className='w-fit flex whitespace-nowrap'
                color={TextColors.white}
              />
              {setFilter ? (
                !isMobile ? (
                  <div
                    className='w-full h-full absolute top-0 left-0 cursor dark-cursor  cursor-pointer'
                    onMouseEnter={() => setPause(true)}
                    onMouseLeave={() => setPause(false)}
                    onClick={() => setFilter(text.option)}
                  ></div>
                ) : (
                  <div
                    className='w-full h-full absolute top-0 left-0 cursor dark-cursor  cursor-pointer'
                    onClick={() => setFilter(text.option)}
                    onTouchStart={() => setPause(true)}
                    onTouchEnd={() => setPause(false)}
                  ></div>
                )
              ) : (
                <></>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className='my-8 w-full overflow-hidden flex'>
      <animated.div style={fade} className='overflow-x-visible flex'>
        <Items />
        <Items />
      </animated.div>
    </div>
  )
}

export default CarouselTerritory
