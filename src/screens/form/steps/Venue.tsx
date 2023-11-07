'use client'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { FormRequest, inputForm, venue } from '../formTypes'
import Select from 'src/screens/components/inputs/Select'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'
import InputNumberForm from 'src/screens/components/inputs/InputNumberForm'
import TimeForm from 'src/screens/components/inputs/TimeForm'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const emptyItem = 'MAKE A SELECTION'
const options = [emptyItem, ...['SPAIN', 'UNITED KINGDOM']]
const inputs: inputForm[] = [
  { label: 'COMPANY NAME*', type: 0, placeholder: 'your company', name: 'company' },
  { label: 'CITY', type: 0, placeholder: 'YOUR CITY', name: 'country' },
  { label: 'COUNTRY', type: 1, placeholder: '', name: 'city', options },
  { label: 'STATE', type: 0, placeholder: 'YOUR STATE', name: 'state' },
  { label: 'WEBSITE', type: 0, placeholder: 'YOURWEBSITE.COM', name: 'website' },
  { label: 'FACEBOOK', type: 0, placeholder: 'YOUR FACEBOOK HERE', name: 'facebook' },
  { label: 'CAPACITY*', type: 2, placeholder: 'NUMBER', name: 'capacity' },
  { label: 'DOORS OPEN', type: 3, placeholder: 'CHOOSE AN HOUR', name: 'doorsOpen' },
  { label: 'DOORS close', type: 3, placeholder: 'CHOOSE AN HOUR', name: 'doorsClose' }
]

const Venue = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<venue>>({})

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
    updateData({ venue: form as any }, 2)
  }

  const active =
    form.company &&
    form.country &&
    // form.city &&
    // form.state &&
    // form.website &&
    // form.facebook &&
    form.capacity &&
    form.doorsOpen // && form.doorsClose
      ? true
      : false

  return (
    <BaseStep onClick={callUpdateData} title={`VENUE`} alt='3/7' active={active}>
      <div className='pt-6'>
        {inputs.map((input, i) => {
          switch (input.type) {
            case 1:
              return (
                <div className='relative' key={`input-${i}`}>
                  <Select
                    label={input.label}
                    options={input.options ?? []}
                    value={(form as any)[input.name] ?? options[0]}
                    onChange={value => setForm({ ...form, [input.name]: value })}
                  />
                </div>
              )
            case 2:
              return (
                <InputNumberForm
                  key={`input-${i}`}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={(form as any)[input.name] ?? ''}
                  onChange={value => setForm({ ...form, [input.name]: parseInt(value) })}
                />
              )
            case 3:
              return (
                <div className='relative' key={`input-${i}`}>
                  <TimeForm
                    label={input.label}
                    placeholder={input.placeholder}
                    hour={((form as any)[input.name] ?? '').split(':')[0]}
                    minute={((form as any)[input.name] ?? '').split(':')[1]}
                    onChange={value => setForm({ ...form, [input.name]: value })}
                  />
                </div>
              )
            default:
              return (
                <InputTextForm
                  key={`input-${i}`}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={(form as any)[input.name] ?? ''}
                  onChange={value => setForm({ ...form, [input.name]: value })}
                />
              )
          }
        })}
      </div>
    </BaseStep>
  )
}

export default Venue