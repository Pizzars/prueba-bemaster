'use client'
import { useState } from 'react'
import { event, FormRequest, inputForm } from '../formTypes'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'
// import Select from '../components/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const inputs: inputForm[] = [
  { label: 'NAME OF THE EVENT*', type: 0, placeholder: 'NAME OF THE EVENT', name: 'EventName' }
]

const EventDetails = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<event>>({})

  const callUpdateData = () => {
    updateData({ event: form as any }, 4)
  }

  const active = form.EventName ? true : false

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
