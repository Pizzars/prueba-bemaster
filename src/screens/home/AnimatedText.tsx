import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import './styles.css'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import Link from 'next/link'
import { useAppSelector } from 'src/redux/hooks'
import CarouselTerritory from './CarouselTerritory'
import { homeTexts } from './components/textsHome'
import ArtistListSlide from './components/ArtistListSlide'

const AnimatedText = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)

  return (
    <div className='relative h-screen bg-black overflow-hidden pointer'>
      <ArtistListSlide />

      <div className='absolute bottom-0 z-30 text-white'>
        <div className='pl-8 desk:pl-16 big:pl-24'>
          <Link href='/artists' className='flex flex-row customLink'>
            <TitleSection
              text={homeTexts.textArtists[currentLanguage]}
              color={TextColors.white}
              className='textBesideIcon cursor'
            />
            <TextIcon
              icon={TextIcons.RIGHT_ARROW}
              size={SizeIcons.TITLE}
              color={TextColors.white}
              className='cursor'
            />
          </Link>
        </div>
        <div className='overflow-hidden' style={{ width: '100%' }}>
          <CarouselTerritory />
        </div>
      </div>
    </div>
  )
}

export default AnimatedText
