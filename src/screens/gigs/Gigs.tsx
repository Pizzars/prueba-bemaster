'use client'
import Filter from '../components/general/Filter/Filter'
import GigsList from './GigsList'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { useEffect, useMemo, useState } from 'react'
import { getEventsData } from 'src/redux/features/eventsSlice'
import { createWeekOptions, filterAndFormatGigs } from 'src/utils/functions'
import Loading, { PageLoad } from '../components/general/Loading'

const Gigs: React.FC = () => {
  const optionPlaceholders = createWeekOptions(9)
  const dispatch = useAppDispatch()
  const { data: events, status } = useAppSelector(state => state.eventsReducer)
  const [selectedDateRange, setSelectedDateRange] = useState(optionPlaceholders[0]?.option)

  const formattedEvents = useMemo(() => {
    const { start, end } = selectedDateRange || { start: '', end: '' }
    return filterAndFormatGigs(events, start, end)
  }, [events, selectedDateRange])

  const handleOptionSelected = (selectedOption: { start: string; end: string }) => {
    const foundOption = optionPlaceholders.find(
      option =>
        option.option.start === selectedOption.start && option.option.end === selectedOption.end
    )?.option
    if (foundOption) {
      setSelectedDateRange(foundOption)
    }
  }

  useEffect(() => {
    if (events) {
      dispatch(getEventsData(0))
    }
  }, [dispatch])

  return (
    <>
      <div className='flex w-full'>
        <Filter
          title='Gigs'
          options={optionPlaceholders}
          onOptionSelected={handleOptionSelected as any}
          className='py-4'
        />
        <GigsList gigs={formattedEvents} />
      </div>
      <Loading type={PageLoad.GISGS} status={status} />
    </>
  )
}

export default Gigs
