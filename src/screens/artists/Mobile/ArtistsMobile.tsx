import ArtistsList from './ArtistsList'
import Filter from '../../components/general/Filter/Filter'

const optionPlaceholders = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_and_latin_america' }
]

interface Params {
  filter: string | null
  setFilter: (value: string) => void
}
const ArtistsMobile = ({ filter, setFilter }: Params) => {
  return (
    <div className='flex w-full'>
      <Filter
        onOptionSelected={(option: any) => {
          setFilter(option)
        }}
        title='Artists'
        options={optionPlaceholders}
        selected={filter ?? optionPlaceholders[0].option}
      />
      <ArtistsList filter={filter ?? optionPlaceholders[0].option} />
    </div>
  )
}

export default ArtistsMobile
