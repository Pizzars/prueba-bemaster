import { useAppSelector } from 'src/redux/hooks'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { homeTexts } from './textsHome'

interface Params {
  animate: boolean
}

const SliderTexts = ({ animate }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)

  return (
    <div className='desk:h-[8.3vw] super:h-[10rem] overflow-hidden'>
      <div className={`${animate ? 'text-carousel' : ''} relative`}>
        <div>
          <TitleHome
            text={homeTexts.textBooking[currentLanguage]}
            className='text-white uppercase'
          />
        </div>
        <div className='translate-y-[100%] absolute top-0 left-0'>
          <TitleHome text={homeTexts.textMusic[currentLanguage]} className='text-white uppercase' />
        </div>
        <div className='translate-y-[205%] absolute top-0 left-0'>
          <TitleHome
            text={homeTexts.textBooking[currentLanguage]}
            className='text-white uppercase'
          />
        </div>
      </div>
    </div>
  )
}

export default SliderTexts
