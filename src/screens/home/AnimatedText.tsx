import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import './styles.css'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import CarouselTerritory from './CarouselTerritory'
import { homeTexts } from './components/textsHome'
import ArtistListSlide from './components/ArtistListSlide'
import useWindowSize from 'src/hooks/useWindowSize'
// import OptionsTerritory from './components/OptionsTerritory'
import TitleHome from '../components/texts/TitleHome'
import { setFilter } from 'src/redux/features/artistsSlice'

interface Params {
  artists?: boolean
}

const AnimatedText = ({ artists = false }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const dispatch = useAppDispatch()
  useWindowSize()
  return (
    <div
      className={`relative w-full ${
        artists ? 'h-full' : 'h-screen'
      } bg-black overflow-hidden pointer`}
    >
      <ArtistListSlide />
      {artists && (
        <div className='absolute top-16 left-8 desk:top-16 desk:left-16 big:top-24 big:left-24 z-30 text-white'>
          <TitleHome text='ARTISTS' color={TextColors.white} />
        </div>
      )}
      <div
        className={`absolute ${artists ? 'bottom-8' : 'bottom-0'} desk:bottom-0 z-30 text-white`}
      >
        <div className='pl-8 desk:pl-16 big:pl-24'>
          {!artists ? (
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
          ) : (
            <div className='flex flex-row'>
              <TitleSection
                text={homeTexts.textSelect[currentLanguage]}
                color={TextColors.white}
                className='textBesideIcon'
              />
            </div>
          )}
        </div>
        <div className='overflow-hidden' style={{ width: '100%' }}>
          {/* {artists && setFilter ? (
            <OptionsTerritory setFilter={setFilter} />
          ) : ( */}
          <CarouselTerritory setFilter={option => dispatch(setFilter(option))} artists={artists} />
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default AnimatedText
