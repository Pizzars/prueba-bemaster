'use client'
import { useState } from 'react'
import { FormRequest } from './formTypes'
import BookingRequest from './steps/BookingRequest'
import EventDetails from './steps/EventDetails'
import Promoter from './steps/Promoter'
import Venue from './steps/Venue'

const Form = () => {
  const [step, setStep] = useState(2)
  const [form, setForm] = useState<Partial<FormRequest>>({})

  const updateData = (data: Partial<FormRequest>, newStep: number) => {
    setForm({ ...form, ...data })
    setStep(newStep)
  }

  switch (step) {
    case 1:
      return <Promoter updateData={updateData} />
    case 2:
      return <Venue updateData={updateData} />
    case 3:
      return <EventDetails updateData={updateData} />
    default:
      return <BookingRequest updateData={updateData} />
  }
}

export default Form
