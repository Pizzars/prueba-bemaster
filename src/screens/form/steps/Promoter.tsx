'use client'
import { useState } from 'react'

import { useAppSelector } from 'src/redux/hooks'
import { FormRequest, inputForm, promoter } from '../formTypes'
import Select from 'src/screens/components/inputs/Select'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const emptyItem = 'MAKE A SELECTION'

const Promoter = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<promoter>>({})

  const { artists: list, countries } = useAppSelector(state => state.formReducer)

  if (!list) {
    return <></>
  }

  const callUpdateData = () => {
    updateData({ promoter: form as any }, 2)
  }

  const active =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.company &&
    form.country &&
    form.country !== emptyItem &&
    // form.city &&
    // form.state &&
    // form.website &&
    form.tax
      ? true
      : false

  if (!countries) return <></>

  const inputs: inputForm[] = [
    { label: 'FIRST NAME*', type: 0, placeholder: 'YOUR FIRST NAME', name: 'firstName' },
    { label: 'LAST NAME*', type: 0, placeholder: 'YOUR LAST NAME', name: 'lastName' },
    { label: 'EMAIL*', type: 0, placeholder: 'you@example.com', name: 'email' },
    { label: 'COMPANY NAME*', type: 0, placeholder: 'your company', name: 'company' },
    { label: 'CITY', type: 0, placeholder: 'YOUR CITY', name: 'country' },
    { label: 'COUNTRY', type: 1, placeholder: '', name: 'city', options: countries },
    { label: 'STATE', type: 0, placeholder: 'YOUR STATE', name: 'state' },
    { label: 'WEBSITE', type: 0, placeholder: 'YOURWEBSITE.COM', name: 'website' },
    { label: 'VAT/TAX NUMBER*', type: 0, placeholder: 'YOUR TAX NUMBER', name: 'tax' }
  ]

  return (
    <BaseStep
      onClick={callUpdateData}
      title={`PROMOTER`}
      alt='2/7'
      active={active}
      description='Please provide the following information to make an artist inquiry.'
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
                    value={(form as any)[input.name] ?? countries[0].value}
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

export default Promoter
