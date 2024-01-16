import OptionsCompleteFilter, {
  optionColors
} from 'src/screens/components/general/Filter/OptionsCompleteFilter'
import ArtistsTitle from '../Components/ArtistsTitle'

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
  const index = optionsFilterArtists.findIndex(option => option.option === selected)

  return (
    <div id='header-container' className='px-12 big:px-20 w-full'>
      <ArtistsTitle />
      <div className='px-4 mt-2 big:mt-4 big:px-6 flex justify-start'>
        <OptionsCompleteFilter
          options={optionsFilterArtists}
          selected={index ?? 0}
          color={optionColors.white}
          onChage={option => setFilter(option)}
          className='desk:text-small desk:leading-small big:text-small big:leading-small'
          step={72}
        />
      </div>
    </div>
  )
}

export default ArtistHeader
