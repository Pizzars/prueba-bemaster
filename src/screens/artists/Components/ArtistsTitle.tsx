import { useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { TextColors } from 'src/utils/Colors'
import ArtistSearch from '../Desktop/ArtistSearch'

const ArtistsTitle = () => {
  const [classText, setClassText] = useState<string>('text-big leading-big')
  const load = useAppSelector(state => state.loadReducer.artists)
  const artist = useAppSelector(state => state.artistsReducer.artist)

  useEffect(() => {
    if (load) {
      setClassText('text-big leading-big duration-0')
      setTimeout(() => {
        setClassText(
          'desk:text-[24px] desk:leading-[21.6px] big:text-[48px] big:leading-[43.2px] duration-500'
        )
      }, 1000)
    }
  }, [load, artist])

  return (
    <div className='flex justify-between px-4 big:px-6'>
      <TitleHome
        text='ARTISTS'
        color={TextColors.white}
        className={`${classText} transition-all duration-500`}
        // className=' transition-all  duration-500'
      />
      {artist ? <div></div> : <ArtistSearch />}
    </div>
  )
}

export default ArtistsTitle
