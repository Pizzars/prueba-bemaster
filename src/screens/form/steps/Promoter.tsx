'use client'
import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { FormRequest, inputForm, promoter } from '../formTypes'
import Select from 'src/screens/components/inputs/Select'
import BaseStep from './BaseStep'
import InputTextForm from 'src/screens/components/inputs/InputTextForm'
// import Select from '../components/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}

const emptyItem = 'MAKE A SELECTION'
const options = [emptyItem, ...['SPAIN', 'UNITED KINGDOM']]
const inputs: inputForm[] = [
  { label: 'FIRST NAME*', type: 0, placeholder: 'YOUR FIRST NAME', name: 'firstName' },
  { label: 'LAST NAME*', type: 0, placeholder: 'YOUR LAST NAME', name: 'lastName' },
  { label: 'EMAIL*', type: 0, placeholder: 'you@example.com', name: 'email' },
  { label: 'COMPANY NAME*', type: 0, placeholder: 'your company', name: 'company' },
  { label: 'CITY', type: 0, placeholder: 'YOUR CITY', name: 'country' },
  { label: 'COUNTRY', type: 1, placeholder: '', name: 'city', options },
  { label: 'STATE', type: 0, placeholder: 'YOUR STATE', name: 'state' },
  { label: 'WEBSITE', type: 0, placeholder: 'YOURWEBSITE.COM', name: 'website' },
  { label: 'VAT/TAX NUMBER*', type: 0, placeholder: 'YOUR TAX NUMBER', name: 'tax' }
]

const Promoter = ({ updateData }: Params) => {
  const [form, setForm] = useState<Partial<promoter>>({})

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
                    value={(form as any)[input.name] ?? options[0]}
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
