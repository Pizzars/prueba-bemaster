'use client'
import StatusComponent from 'app/(pages)/redux-test/StatusComponent'
import { useEffect } from 'react'
import { getPodcastsData } from 'src/redux/features/podcastsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const PodcastsExample = () => {
  const list = useAppSelector(state => state.podcastsReducer.data)
  const status = useAppSelector(state => state.podcastsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPodcastsData(1))
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div className='flex'>
        Status: <StatusComponent status={status} />
      </div>
      <div>
        Podcasts Data:
        <div>
          {list?.map((podcast, i) => {
            return (
              <span
                className={`mx-2 ${i % 2 === 0 ? 'text-pink-600' : 'text-orange-600'}`}
                key={`podcast-${i}`}
              >
                {podcast.title}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PodcastsExample
