'use client'
import { useState } from 'react'
import { FormRequest } from './formTypes'
import BookingRequest from './steps/BookingRequest'
import Promoter from './steps/Promoter'

const Form = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<Partial<FormRequest>>({})

  const updateData = (data: Partial<FormRequest>, newStep: number) => {
    setForm({ ...form, ...data })
    setStep(newStep)
  }

  switch (step) {
    case 1:
      return <Promoter updateData={updateData} />
    default:
      return <BookingRequest updateData={updateData} />
  }
}

export default Form
