import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useAppSelector } from 'src/redux/hooks'
import ArtistImageCarousel from '../Components/ArtistImageCarousel'
import ArtistList from './ArtistList/ArtistsList'
import ArtistDetails from './ArtistsDetails'
import { ulrBack } from 'src/utils/consts'
import OptionsFilter, { optionColors } from 'src/screens/components/general/Filter/OptionsFilter'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { TextColors } from 'src/utils/Colors'

const options = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_latam' }
]

const ArtistsDesktop: React.FC = () => {
  const selectedArtist = useAppSelector(state => state.artistsReducer.artist)
  const [prevArtistId, setPrevArtistId] = useState<number | null>(null)
  const [classText, setClassText] = useState<string>('text-big leading-big')

  // Estilos de animación para el carrusel de imágenes
  const carouselStyle = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
    reset: selectedArtist ? selectedArtist.id !== prevArtistId : false,
    immediate: prevArtistId === null
  })

  // Estilos de animación para la expansión
  const expandStyle = useSpring({
    width: selectedArtist ? '50%' : '0%',
    opacity: selectedArtist ? 1 : 0,
    from: { width: '0%', opacity: 0 }
  })

  // Efecto para actualizar el ID del artista previo y reiniciar la animación del carrusel
  useEffect(() => {
    if (selectedArtist) {
      setPrevArtistId(selectedArtist.id)
    }
  }, [selectedArtist])

  useEffect(() => {
    setTimeout(() => {
      setClassText('text-small leading-small')
    }, 1000)
  }, [])

  return (
    <div>
      <div className='mx-20 mt-8'>
        <TitleHome
          text='ARTISTS'
          color={TextColors.white}
          className={`${classText} transition-all duration-500`}
          // className=' transition-all  duration-500'
        />
      </div>
      <div className='mx-16 px-2 flex justify-start'>
        <OptionsFilter
          options={options}
          color={optionColors.white}
          className='desk:text-small desk:leading-small'
          step={72}
        />
      </div>
      <div className='flex w-full h-screen bg-black-app'>
        <div className='w-1/4'>
          <ArtistList />
        </div>
        <div className='flex-grow flex h-full'>
          <animated.div style={expandStyle} className='h-full overflow-hidden'>
            <animated.div style={carouselStyle}>
              <ArtistImageCarousel
                profilePics={[`${ulrBack}${selectedArtist?.image?.url ?? ''}`]}
                customClassname='h-full'
                desktop
              />
            </animated.div>
          </animated.div>
          <animated.div style={expandStyle} className='h-full overflow-hidden'>
            <ArtistDetails />
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default ArtistsDesktop
