import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import OptionsFilter, { optionColors } from 'src/screens/components/general/Filter/OptionsFilter'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { TextColors } from 'src/utils/Colors'
import ArtistSearch from './ArtistSearch'

interface Params {
  setFilter: (option: string) => void
  selected: string
}

export const optionsFilterArtists = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_and_latin_america' }
]

const ArtistHeader = ({ setFilter, selected }: Params) => {
  const [classText, setClassText] = useState<string>('text-big leading-big')
  const load = useAppSelector(state => state.loadReducer.artists)
  const artist = useAppSelector(state => state.artistsReducer.artist)

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setClassText('text-small leading-small')
      }, 1000)
    }
  }, [load])

  const index = optionsFilterArtists.findIndex(option => option.option === selected)

  return (
    <>
      <div className='mx-20 big:mx-24 mt-16 flex justify-between'>
        <TitleHome
          text='ARTISTS'
          color={TextColors.white}
          className={`${classText} transition-all duration-500`}
          // className=' transition-all  duration-500'
        />
        {artist ? <div></div> : <ArtistSearch filter={selected} />}
      </div>
      <div className='mx-16 big:mx-20 px-2 flex justify-start'>
        <OptionsFilter
          options={optionsFilterArtists}
          selected={index ?? 0}
          color={optionColors.white}
          onChage={option => setFilter(option)}
          className='desk:text-small desk:leading-small big:text-small big:leading-small'
          step={72}
        />
      </div>
    </>
  )
}

export default ArtistHeader
