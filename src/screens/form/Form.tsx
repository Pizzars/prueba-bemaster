'use client'
import { useEffect, useState } from 'react'
import { gottenDataForm } from 'src/redux/features/formSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import { FormRequest } from './formTypes'
import BookingRequest from './steps/BookingRequest'
import EventDetails from './steps/EventDetails'
import Promoter from './steps/Promoter'
import Venue from './steps/Venue'

const Form = () => {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Partial<FormRequest>>({})

  const { status } = useAppSelector(state => state.formReducer)
  const dispatch = useAppDispatch()

  const updateData = (data: Partial<FormRequest>, newStep: number) => {
    setForm({ ...form, ...data })
    setStep(newStep)
  }

  const getDataForm = () => {
    const iframe = document.getElementById('iframeName') as any
    const mensaje = 'GET_DATA'
    if (iframe) {
      iframe.contentWindow.postMessage(
        mensaje,
        'https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
      )
    }
  }

  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (event.origin === 'https://one.systemonesoftware.com') {
        dispatch(gottenDataForm(JSON.parse(event.data)))
      }
    })

    getDataForm()
  }, [])

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
      <Loading type={PageLoad.BOOK} status={status} />
      <div className='desk:p-16 big:p-24 desk:h-[0] h-[100vh] hidden'>
        <iframe
          width='100%'
          height='100%'
          name='iframeName'
          id='iframeName'
          src='https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
          // src='http://localhost:8888/prueba/'
        ></iframe>
      </div>
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
