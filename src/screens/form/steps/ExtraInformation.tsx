'use client'
import { useState } from 'react'
import { extra, FormRequest, inputForm } from '../formTypes'
import BaseStep from './BaseStep'
// import InputTextForm from 'src/screens/components/inputs/InputTextForm'
import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
// import Select from '../components/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const inputs: inputForm[] = [
  {
    label: 'LAST EVENT LINE-UP',
    type: 0,
    placeholder: 'LAST EVENT LINE-UP',
    name: 'FFLastEventLineUp'
  },
  { label: 'CONFIRMED LINE-UP', type: 0, placeholder: 'CONFIRMED LINE-UP', name: 'FFotheracts' }
]

const ExtraInformation = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<extra>>({})

  const callUpdateData = () => {
    updateData({ extra: form as any }, 6)
  }

  const active = true

  return (
    <BaseStep
      onClick={callUpdateData}
      title={`EXTRA
      INFORMATION`}
      alt='6/7'
      active={active}
      titleClass='uppercase desk:text-[3.5vw] super:text-[90px]'
    >
      <div className='pt-6'>
        {inputs.map((input, i) => {
          return (
            <div className='relative' key={`input-${i}`}>
              <TextAreaForm
                label={input.label}
                value={(form as any)[input.name] ?? ''}
                onChange={value => setForm({ ...form, [input.name]: value })}
                button={false}
              />
            </div>
            // <InputTextForm
            //   key={`input-${i}`}
            //   label={input.label}
            //   placeholder={input.placeholder}
            //   value={(form as any)[input.name] ?? ''}
            //   onChange={value => setForm({ ...form, [input.name]: value })}
            // />
          )
        })}
      </div>
    </BaseStep>
  )
}

export default ExtraInformation
