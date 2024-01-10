import ArtistsList from './ArtistsList'
import Filter from '../../components/general/Filter/Filter'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { setFilter } from 'src/redux/features/artistsSlice'
// import InfiniteArtistList from '../Desktop/InfiniteArtistList'

const optionPlaceholders = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'EUROPE', option: 'europe' },
  { title: 'SPAIN', option: 'spain' },
  { title: 'LATIN AMERICA', option: 'latin_america' },
  { title: 'SPAIN & LATAM', option: 'spain_and_latin_america' }
]

const ArtistsMobile = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.artistsReducer.filter)

  if (!filter) return <></>

  return (
    <div className='flex w-full'>
      {/* <InfiniteArtistList filter={filter ?? optionPlaceholders[0].option} /> */}

      <ArtistsList />
      <Filter
        onOptionSelected={(option: any) => {
          dispatch(setFilter(option))
        }}
        title='Artists'
        options={optionPlaceholders}
        selected={filter ?? optionPlaceholders[0].option}
      />
    </div>
  )
}

export default ArtistsMobile
