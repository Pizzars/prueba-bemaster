import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import OptionsFilter, { optionColors } from 'src/screens/components/general/Filter/OptionsFilter'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { TextColors } from 'src/utils/Colors'

interface Params {
  setFilter: (option: string) => void
}

export const optionsFilterArtists = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_and_latin_america' }
]

const ArtistHeader = ({ setFilter }: Params) => {
  const [classText, setClassText] = useState<string>('text-big leading-big')
  const load = useAppSelector(state => state.loadReducer.artists)

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setClassText('text-small leading-small')
      }, 1000)
    }
  }, [load])

  return (
    <>
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
          options={optionsFilterArtists}
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