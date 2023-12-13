'use client'
import { useState } from 'react'
import Loading, { PageLoad } from '../components/general/Loading'
import { FormRequest } from './formTypes'
import BookingRequest from './steps/BookingRequest'
import EventDetails from './steps/EventDetails'
import Promoter from './steps/Promoter'
import Venue from './steps/Venue'

const Form = () => {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Partial<FormRequest>>({})

  const updateData = (data: Partial<FormRequest>, newStep: number) => {
    setForm({ ...form, ...data })
    setStep(newStep)
  }

  const getView = () => {
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

  return (
    <>
      {getView()}
      <Loading type={PageLoad.BOOK} />
    </>
  )

  // return (
  //   <iframe
  //     id='formSO'
  //     width='100%'
  //     height='2000'
  //     scrolling='no'
  //     // allowtransparency="true"
  //     // frameborder="no"
  //     src='https://one.systemonesoftware.com/webform.aspx?key=4865651a4cac425394ccf0d045e214ce'
  //   ></iframe>
  // )
}

export default Form
