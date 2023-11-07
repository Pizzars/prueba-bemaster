'use client'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { event, FormRequest, inputForm } from '../formTypes'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'
// import Select from '../components/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const inputs: inputForm[] = [
  { label: 'NAME OF THE EVENT*', type: 0, placeholder: 'NAME OF THE EVENT', name: 'name' }
]

const EventDetails = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<event>>({})

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

  const callUpdateData = () => {
    updateData({ promoter: form as any }, 4)
  }

  const active = form.name ? true : false

  return (
    <BaseStep
      onClick={callUpdateData}
      title={`EVENT
    DETAILS`}
      alt='4/7'
      active={active}
    >
      <div className='pt-6'>
        {inputs.map((input, i) => {
          return (
            <InputTextForm
              key={`input-${i}`}
              label={input.label}
              placeholder={input.placeholder}
              value={(form as any)[input.name] ?? ''}
              onChange={value => setForm({ ...form, [input.name]: value })}
            />
          )
        })}
      </div>
    </BaseStep>
  )
}

export default EventDetails
