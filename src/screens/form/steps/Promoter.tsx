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
    form.SG2_Contact_FirstName &&
    form.SG2_Contact_LastName &&
    form.SG2_Contact_Email &&
    form.SG2Addressname &&
    form.SG2AddressCountryId &&
    form.SG2AddressCountryId !== emptyItem &&
    // form.SG2AddressCity &&
    // form.SG2AddressStateId &&
    // form.SG2_Company_Website &&
    form.SG2_Company_TaxNumber
      ? true
      : false

  if (!countries) return <></>

  const inputs: inputForm[] = [
    {
      label: 'FIRST NAME*',
      type: 0,
      placeholder: 'YOUR FIRST NAME',
      name: 'SG2_Contact_FirstName'
    },
    { label: 'LAST NAME*', type: 0, placeholder: 'YOUR LAST NAME', name: 'SG2_Contact_LastName' },
    { label: 'EMAIL*', type: 0, placeholder: 'you@example.com', name: 'SG2_Contact_Email' },
    { label: 'COMPANY NAME*', type: 0, placeholder: 'your company', name: 'SG2Addressname' },
    { label: 'CITY', type: 0, placeholder: 'YOUR CITY', name: 'SG2AddressCity' },
    { label: 'COUNTRY', type: 1, placeholder: '', name: 'SG2AddressCountryId', options: countries },
    { label: 'STATE', type: 0, placeholder: 'YOUR STATE', name: 'SG2AddressStateId' },
    { label: 'WEBSITE', type: 0, placeholder: 'YOURWEBSITE.COM', name: 'SG2_Company_Website' },
    {
      label: 'VAT/TAX NUMBER*',
      type: 0,
      placeholder: 'YOUR TAX NUMBER',
      name: 'SG2_Company_TaxNumber'
    }
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
