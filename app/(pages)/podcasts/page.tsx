import BasePage from 'src/screens/components/general/base/BasePage'
import Podcast from 'src/screens/podcast/Podcast'

export default function PodcastPage() {
  return (
    <BasePage className='bg-podcasts' title='Podcasts'>
      <Podcast />
    </BasePage>
  )
}
