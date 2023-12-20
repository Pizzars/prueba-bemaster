import ArtistsList from './ArtistsList'
import Filter from '../../components/general/Filter/Filter'
import { useState } from 'react'

const optionPlaceholders = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_and_latin_america' }
]

const ArtistsMobile: React.FC = () => {
  const [filter, setFilter] = useState(optionPlaceholders[0].option)
  return (
    <div className='flex w-full'>
      <Filter
        onOptionSelected={(option: any) => {
          setFilter(option)
        }}
        title='Artists'
        options={optionPlaceholders}
      />
      <ArtistsList filter={filter} />
    </div>
  )
}

export default ArtistsMobile
