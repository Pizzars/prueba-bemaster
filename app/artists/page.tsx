import Artists from 'src/screens/artists/Artists'
import BasePage from 'src/screens/components/general/base/BasePage'

export default function ArtistPage() {
  return (
    <BasePage className='bg-artists' title='Artists'>
      <Artists />
    </BasePage>
  )
}
