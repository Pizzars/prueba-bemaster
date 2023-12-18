import ArtistsList from './ArtistsList'
import Filter from '../../components/general/Filter/Filter'
import { useState } from 'react'

const optionPlaceholders = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'IN EUROPE', option: 'europe' },
  { title: 'IN LATINAMERICA', option: 'latin_america' },
  { title: 'IN ASIA', option: 'asia' }
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
