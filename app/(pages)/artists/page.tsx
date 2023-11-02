import Artists from 'src/screens/artists/ArtistsPage'
import BasePage from 'src/screens/components/general/base/BasePage'

export default function ArtistPage() {
  return (
    <BasePage className='bg-artists'>
      <Artists />
    </BasePage>
  )
}
