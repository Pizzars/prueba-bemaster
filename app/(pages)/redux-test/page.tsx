import AboutExample from 'src/screens/redux-example/AboutExample'
import ArtistsDetailExample from 'src/screens/redux-example/ArtistsDetailExample'
import ArtistsExample from 'src/screens/redux-example/ArtistsExample'
import EventsExample from 'src/screens/redux-example/EventsExample'
import NewsExample from 'src/screens/redux-example/NewsExample'
import PodcastsExample from 'src/screens/redux-example/PodcastsExample'
import StateExample from 'src/screens/redux-example/StateExample'

export default function ReduxPage() {
  return (
    <div className='w-full p-8'>
      <AboutExample />
      <ArtistsExample />
      <ArtistsDetailExample />
      <EventsExample />
      <NewsExample />
      <PodcastsExample />
      <br />
      <br />
      <br />
      <StateExample />
    </div>
  )
}
