import { TextColors } from 'src/utils/Colors'
import { useAppSelector } from 'src/redux/hooks'
import TitleSection from 'src/screens/components/texts/TitleSection'

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
  setFilter: (option: string) => void
}

const OptionsTerritory = ({ setFilter }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const carouselTexts = carouselListTexts[currentLanguage]

  return (
    <div className='my-8 w-screen overflow-x-auto overflow-y-hidden'>
      <div className='flex w-fit'>
        {carouselTexts.map((text, i) => {
          return (
            <div
              className={`mx-8 desk:mx-16 big:mx-24 w-fit cursor-pointer cursor`}
              key={`item1-${i}`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setFilter(text.option)
              }}
            >
              <TitleSection
                text={text.text}
                className='w-fit flex whitespace-nowrap cursor dark-cursor'
                color={TextColors.white}
              />
            </div>
          )
        })}
        {carouselTexts.map((text, i) => {
          return (
            <div
              className={`mx-8 desk:mx-16 big:mx-24 w-fit cursor-pointer cursor`}
              key={`item1-${i}`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setFilter(text.option)
              }}
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
    </div>
  )
}

export default OptionsTerritory
