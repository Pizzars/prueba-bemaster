'use client'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { booking } from '../formTypes'
import Select from 'src/screens/components/inputs/Select'
import CalendarForm from 'src/screens/components/inputs/CalendarForm'
import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
import BaseStep from './BaseStep'
// import Select from '../components/Select'

interface Params {
  updateData: (data: any, newStep: number) => void
}
const optionPlaceholders = [
  { title: 'ENGLISH', option: 'es' },
  { title: 'ESPAÑOL', option: 'en' }
]

const BookingRequest = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<booking>>({})

  const list = useAppSelector(state => state.artistsReducer.data)
  const status = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!list && status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [status, list])

  if (!list) {
    return <></>
  }

  const names = list
    .map(artist => {
      return artist.name ?? ''
    })
    .sort((a, b) => {
      if (a < b) {
        return -1
      }
      return 0
    })
  const options = ['MAKE A SELECTION', ...names]

  return (
    <BaseStep
      onClick={() => updateData({ booking: form }, 2)}
      options={optionPlaceholders}
      title={`BOOKing
    request`}
      alt='1/7'
    >
      <div className='pt-6'>
        <Select
          options={options}
          value={form.artist ?? options[0]}
          onChange={artist => setForm({ ...form, artist })}
        />
        <CalendarForm value={form.date} onChange={date => setForm({ ...form, date })} />
        <TextAreaForm
          value={form.aditionalInformation ?? ''}
          onChange={aditionalInformation => setForm({ ...form, aditionalInformation })}
        />
      </div>
    </BaseStep>
  )
}

export default BookingRequest
