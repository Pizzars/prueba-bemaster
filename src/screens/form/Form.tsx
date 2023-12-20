'use client'
import { useState } from 'react'
import { gottenDataForm } from 'src/redux/features/formSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import { FormRequest } from './formTypes'
import BookingRequest from './steps/BookingRequest'
import Consent from './steps/Consent'
import EventDetails from './steps/EventDetails'
import ExtraInformation from './steps/ExtraInformation'
import FinancialOffer from './steps/FinancialOffer'
import Promoter from './steps/Promoter'
import Venue from './steps/Venue'

const Form = () => {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Partial<FormRequest>>({})

  const { status } = useAppSelector(state => state.formReducer)
  const dispatch = useAppDispatch()

  const updateData = (data: Partial<FormRequest>, newStep: number) => {
    setForm({ ...form, ...data })
    console.log('Formulario actual: ', { ...form, ...data })

    setStep(newStep)
  }

  const getDataForm = () => {
    const iframe = document.getElementById('iframeName') as any
    const request = {
      type: 'GET_DATA'
    }
    // const mensaje = 'GET_DATA'
    const mensaje = JSON.stringify(request)
    if (iframe) {
      iframe.contentWindow.postMessage(
        mensaje,
        'https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
      )
    }
  }

  const sendForm = () => {
    const formData: any[] = []
    Object.keys(form).forEach(formKey => {
      const data = (form as any)[formKey]
      Object.keys(data).forEach(dataKey => {
        if (data[dataKey]) {
          formData.push({
            id: dataKey,
            value: data[dataKey]
          })
        }
      })
    })

    formData.push({ id: 'IAgreeChb', value: true })

    const iframe = document.getElementById('iframeName') as any

    const request = {
      type: 'SEND_DATA',
      data: formData
    }

    console.log('data Request: ', request)

    const mensaje = JSON.stringify(request)
    if (iframe) {
      iframe.contentWindow.postMessage(
        mensaje,
        'https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
      )
    }
  }

  const getView = () => {
    switch (step) {
      case 1:
        return <Promoter updateData={updateData} />
      case 2:
        return <Venue updateData={updateData} />
      case 3:
        return <EventDetails updateData={updateData} />
      case 4:
        return <FinancialOffer updateData={updateData} />
      case 5:
        return <ExtraInformation updateData={updateData} />
      case 6:
        return <Consent updateData={sendForm} />
      default:
        return <BookingRequest updateData={updateData} />
    }
  }

  return (
    <>
      {getView()}
      <Loading type={PageLoad.BOOK} status={status} />
      <div className='desk:p-16 big:p-24 desk:h-[0] opacity-0 hidden h-[100vh]'>
        <iframe
          width='100%'
          height='100%'
          name='iframeName'
          id='iframeName'
          src='https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
          // src='http://localhost:8888/prueba/'
          onLoad={() => {
            window.addEventListener('message', function (event) {
              if (event.origin === 'https://one.systemonesoftware.com') {
                dispatch(gottenDataForm(JSON.parse(event.data)))
              }
            })

            getDataForm()
          }}
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
