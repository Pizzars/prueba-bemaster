'use client'

import { useAppSelector } from 'src/redux/hooks'
import { booking, FormRequest } from '../formTypes'
import CalendarForm from 'src/screens/components/inputs/CalendarForm'
import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
import BaseStep from './BaseStep'
import Select from 'src/screens/components/inputs/Select'
import { useState } from 'react'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}
const optionPlaceholders = [
  { title: 'ENGLISH', option: 'es' },
  { title: 'ESPAÑOL', option: 'en' },
  { title: 'FRENCH', option: 'FR' }
]

const BookingRequest = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<booking>>({})

  const { artists: list } = useAppSelector(state => state.formReducer)

  if (!list) {
    return <></>
  }

  const callUpdateData = () => {
    updateData({ booking: form as any }, 1)
  }

  return (
    <BaseStep
      onClick={callUpdateData}
      options={optionPlaceholders}
      title={`BOOKING
    REQUEST`}
      description='Please provide the following information to make an artist inquiry.'
      alt='1/7'
      active={form.artist && form.artist !== list[0].label && form.ShowDate1Date ? true : false}
    >
      <div className='relative'>
        <Select
          options={list}
          value={form.artist ?? list[0].value}
          onChange={artist => setForm({ ...form, artist })}
          label='Artist*'
        />
      </div>
      <div className='relative'>
        <CalendarForm
          value={form.ShowDate1Date}
          onChange={ShowDate1Date => setForm({ ...form, ShowDate1Date })}
        />
      </div>
      <TextAreaForm
        label='ADDITIONAL INFORMATION'
        value={form.ShowNote ?? ''}
        onChange={ShowNote => setForm({ ...form, ShowNote })}
      />
    </BaseStep>
  )
}

export default BookingRequest
