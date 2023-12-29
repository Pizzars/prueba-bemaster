import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useAppSelector } from 'src/redux/hooks'
import { ulrBack } from 'src/utils/consts'
import ArtistImageCarousel from '../Components/ArtistImageCarousel'
import ArtistDetails from './ArtistsDetails'

const ArtistData = () => {
  const selectedArtist = useAppSelector(state => state.artistsReducer.artist)
  const [prevArtistId, setPrevArtistId] = useState<number | null>(null)
  // const [classText, setClassText] = useState<string>('text-big leading-big')

  // Estilos de animación para el carrusel de imágenes
  const carouselStyle = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
    reset: selectedArtist ? selectedArtist.id !== prevArtistId : false,
    immediate: prevArtistId === null
  })

  // Efecto para actualizar el ID del artista previo y reiniciar la animación del carrusel
  useEffect(() => {
    if (selectedArtist) {
      setPrevArtistId(selectedArtist.id)
    }
  }, [selectedArtist])

  // Estilos de animación para la expansión
  const expandStyle = useSpring({
    width: selectedArtist ? '50%' : '0%',
    opacity: selectedArtist ? 1 : 0,
    from: { width: '0%', opacity: 0 }
  })

  return (
    <div className='flex-grow flex h-full w-full'>
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
  )
}

export default ArtistData
