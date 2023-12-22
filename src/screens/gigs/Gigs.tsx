'use client'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { useEffect, useState } from 'react'
import { getEventsData } from 'src/redux/features/eventsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import GigsListData from './GigsListData'
import HeadGigs from './HeadGigs'

const Gigs: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data: events, status, weeks } = useAppSelector(state => state.eventsReducer)
  const [filter, setFilter] = useState<string | null>(null)

  useEffect(() => {
    if (status === StateRequest.EMPTY) {
      dispatch(getEventsData())
    }
  }, [status, dispatch])

  const list = (events ?? []).slice().filter(event => {
    if (!weeks.length) {
      return true
    }

    const dataFilter = JSON.parse(filter ?? weeks[0].option)

    if (event.date.year === dataFilter.year) {
      if (event.date.month === dataFilter.month) {
        const isDayInRange = event.date.day >= dataFilter.start && event.date.day <= dataFilter.end

        return isDayInRange
      }
    }

    return false
  })

  return (
    <>
      <HeadGigs select={option => setFilter(option)} />
      <div className='flex w-full flex-col' id='list-container'>
        <GigsListData gigs={list} />
      </div>

      {/* <Loading type={PageLoad.GISGS} status={status} /> */}
    </>
  )
}

export default Gigs
