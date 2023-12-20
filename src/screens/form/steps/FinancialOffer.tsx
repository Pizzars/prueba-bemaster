'use client'
import { useState } from 'react'
import { financial, FormRequest, inputForm } from '../formTypes'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'
import Select from 'src/screens/components/inputs/Select'
import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
// import Select from '../components/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const options = [
  { label: 'EUR (Euro)', value: '1' },
  { label: 'USD (United States Dollar)', value: '2' }
]

const inputs: inputForm[] = [
  { label: 'ARTIST FEE*', type: 0, placeholder: '0', name: 'EventOfferAmount' },
  {
    label: 'CURRENCY*',
    type: 1,
    placeholder: 'currency',
    name: 'EventOfferCurrency',
    options
  },
  { label: 'COMMENT', type: 2, placeholder: 'COMMENT', name: 'EventOfferComment' }
]

const FinancialOffer = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<financial>>({
    EventOfferCurrency: options[0].value
  })

  const callUpdateData = () => {
    updateData({ financial: form as any }, 5)
  }

  const active = form.EventOfferAmount && form.EventOfferCurrency ? true : false

  return (
    <BaseStep
      onClick={callUpdateData}
      title={`FINANCIAL
      OFFER`}
      alt='5/7'
      active={active}
    >
      <div className='pt-6'>
        {inputs.map((input, i) => {
          switch (input.type) {
            case 1:
              return (
                <div className='relative' key={`input-${i}`}>
                  <Select
                    label={input.label}
                    options={input.options ?? []}
                    value={(form as any)[input.name] ?? options[0].value}
                    onChange={value => setForm({ ...form, [input.name]: value })}
                  />
                </div>
              )
            case 2:
              return (
                <div className='relative' key={`input-${i}`}>
                  <TextAreaForm
                    label={input.label}
                    value={(form as any)[input.name] ?? ''}
                    onChange={value => setForm({ ...form, [input.name]: value })}
                    button={false}
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

export default FinancialOffer
