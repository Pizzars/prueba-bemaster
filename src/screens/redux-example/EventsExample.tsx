'use client'
import StatusComponent from './StatusComponent'
import { useEffect } from 'react'
import { getEventsData } from 'src/redux/features/eventsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const EventsExample = () => {
  const list = useAppSelector(state => state.eventsReducer.data)
  const status = useAppSelector(state => state.eventsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getEventsData())
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div className='flex'>
        Status: <StatusComponent status={status} />
      </div>
      <div>
        Events Data:
        <div>
          {list?.map((artist, i) => {
            return (
              <span
                className={`mx-2 ${i % 2 === 0 ? 'text-pink-600' : 'text-orange-600'}`}
                key={`artist-${i}`}
              >
                {artist.eventName}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventsExample
