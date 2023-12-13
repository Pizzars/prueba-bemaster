'use client'

import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { booking, FormRequest } from '../formTypes'
import CalendarForm from 'src/screens/components/inputs/CalendarForm'
import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
import BaseStep from './BaseStep'
import Select from 'src/screens/components/inputs/Select'

interface Params {
  updateData: (data: Partial<FormRequest>, newStep: number) => void
}
const optionPlaceholders = [
  { title: 'ENGLISH', option: 'es' },
  { title: 'ESPAÑOL', option: 'en' },
  { title: 'FRENCH', option: 'FR' }
]

const BookingRequest = ({ updateData }: Params) => {
  // useEffect(() => {
  // window.addEventListener('message', function (event) {
  //   // Verificar el origen del mensaje si es necesario
  //   // if (event.origin !== "http://url-del-iframe.com") return;

  //   // Manejar el mensaje recibido

  //   if (event.origin === 'http://localhost:8888') {
  //     console.log('Mensaje recibido en la página principal:', JSON.parse(event.data))
  //   }
  // })
  // }, [])

  // const click = () => {
  //   const iframe = document.getElementById('iframeName') as any
  //   const mensaje = 'Hola desde la página principal! .... Equis de :D'
  //   if (iframe) {

  //     iframe.contentWindow.postMessage(mensaje, 'http://localhost:8888/prueba/')
  //   }
  // }

  // return (
  //   <div className='desk:p-16 big:p-24 desk:h-[2000px] h-[100vh]'>
  //     {/* <button className='p-4 bg-red-300 rounded-lg mb-8' onClick={click}>
  //       Probar mensaje
  //     </button> */}
  //     <iframe
  //       width='100%'
  //       height='100%'
  //       name='iframeName'
  //       id='iframeName'
  //       src='https://one.systemonesoftware.com/webform.aspx?key=d91e3acf82574a94b2b179a1721630b9'
  //       // src='http://localhost:8888/prueba/'
  //     ></iframe>
  //   </div>
  // )

  const [form, setForm] = useState<Partial<booking>>({})

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

  const names = list
    .map(artist => {
      return artist.name ?? ''
    })
    .sort((a, b) => {
      if (a < b) {
        return -1
      }
      return 0
    })
  const emptyArtist = 'MAKE A SELECTION'
  const options = [emptyArtist, ...names]

  const callUpdateData = () => {
    updateData({ booking: form as any }, 1)
  }

  return (
    <BaseStep
      onClick={callUpdateData}
      options={optionPlaceholders}
      title={`BOOKing
    request`}
      description='Please provide the following information to make an artist inquiry.'
      alt='1/7'
      hideButton={true}
      active={form.artist && form.artist !== emptyArtist && form.date ? true : false}
    >
      <div className='relative'>
        <Select
          options={options}
          value={form.artist ?? options[0]}
          onChange={artist => setForm({ ...form, artist })}
          label='Artist*'
        />
      </div>
      <div className='relative'>
        <CalendarForm value={form.date} onChange={date => setForm({ ...form, date })} />
      </div>
      <TextAreaForm
        label='ADDITIONAL INFORMATION'
        value={form.aditionalInformation ?? ''}
        onChange={aditionalInformation => setForm({ ...form, aditionalInformation })}
      />
    </BaseStep>
  )
}

export default BookingRequest
