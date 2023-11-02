'use client'
import { useState } from 'react'
import BookingRequest from './steps/BookingRequest'

const Form = () => {
  const [step, setStep] = useState(0)

  const updateData = (data: any, newStep: number) => {
    setStep(newStep)
  }

  switch (step) {
    default:
      return <BookingRequest updateData={updateData} />
  }
}

export default Form
