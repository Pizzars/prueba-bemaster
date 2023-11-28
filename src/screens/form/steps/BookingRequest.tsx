'use client'
import // useEffect
// useState
'react'

// import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
// import { getArtistsData } from 'src/redux/features/artistsSlice'
// import { StateRequest } from 'src/redux/features/baseReducer'
// import { booking, FormRequest } from '../formTypes'
// import Select from 'src/screens/components/inputs/Select'
// import CalendarForm from 'src/screens/components/inputs/CalendarForm'
// import TextAreaForm from 'src/screens/components/inputs/TextAreaForm'
import BaseStep from './BaseStep'
// import Select from '../components/Select'

// interface Params {
//   updateData: (data: Partial<FormRequest>, newStep: number) => void
// }
// const optionPlaceholders = [
//   { title: 'ENGLISH', option: 'es' },
//   { title: 'ESPAÑOL', option: 'en' },
//   { title: 'FRENCH', option: 'FR' }
// ]

const BookingRequest = () =>
  // { updateData }: Params
  {
    // const [form, setForm] = useState<Partial<booking>>({})

    // const list = useAppSelector(state => state.artistsReducer.data)
    // const status = useAppSelector(state => state.artistsReducer.status)
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //   if (!list && status === StateRequest.EMPTY) {
    //     dispatch(getArtistsData())
    //   }
    // }, [status, list])

    // if (!list) {
    //   return <></>
    // }

    // const names = list
    //   .map(artist => {
    //     return artist.name ?? ''
    //   })
    //   .sort((a, b) => {
    //     if (a < b) {
    //       return -1
    //     }
    //     return 0
    //   })
    // const emptyArtist = 'MAKE A SELECTION'
    // const options = [emptyArtist, ...names]

    const callUpdateData = () => {
      // updateData({ booking: form as any }, 1)
    }

    return (
      <BaseStep
        onClick={callUpdateData}
        // options={optionPlaceholders}
        title={`BOOKing
    request`}
        description='Please provide the following information to make an artist inquiry.'
        // alt='1/7'
        hideButton={true}
        // active={form.artist && form.artist !== emptyArtist && form.date ? true : false}
      >
        <iframe
          id='formSO'
          width='100%'
          height='2000'
          scrolling='no'
          name='iframeName'
          // allowtransparency="true"
          // frameborder="no"
          src='https://one.systemonesoftware.com/webform.aspx?key=4865651a4cac425394ccf0d045e214ce'
        ></iframe>
        {/* <BaseStep className='pt-6'>
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
      </div> */}
      </BaseStep>
    )
  }

export default BookingRequest
