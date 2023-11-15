import BasePage from 'src/screens/components/general/base/BasePage'
import PodcastDetail from 'src/screens/podcast/detail/PodcastDetail'

export default function DetailPodcastPage() {
  return (
    <BasePage className='bg-podcasts' title='Podcasts'>
      <PodcastDetail />
    </BasePage>
  )
}
