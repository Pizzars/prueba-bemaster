import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import './styles.css'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import Link from 'next/link'
import { useAppSelector } from 'src/redux/hooks'
import CarouselTerritory from './CarouselTerritory'
import { homeTexts } from './components/textsHome'

const AnimatedText = () => {
  const artists = useAppSelector(state => state.artistsReducer.data)
  const groupedArtists = []

  if (!artists) return <></>

  for (let i = 0; i < artists.length; i += 4) {
    groupedArtists.push(artists.slice(i, i + 4))
  }

  const currentLanguage = useAppSelector(state => state.languageReducer.language)

  return (
    <div className='relative h-screen bg-black overflow-hidden pointer'>
      <div className='animated-text z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist?.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-1 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-2 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-3 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black z-20' />
      <div className='absolute bottom-0 z-30 text-white pl-4'>
        <Link href='/artists' className='flex flex-row customLink'>
          <TitleSection
            text={homeTexts.textArtists[currentLanguage]}
            color={TextColors.white}
            className='textBesideIcon'
          />
          <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.white} />
        </Link>
        <div className='overflow-hidden' style={{ width: '100%' }}>
          <CarouselTerritory />
        </div>
      </div>
    </div>
  )
}

export default AnimatedText
