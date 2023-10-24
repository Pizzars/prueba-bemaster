'use client'

import { useEffect } from 'react'
import { getAboutData } from 'src/redux/features/aboutSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TitleMedium from '../components/texts/TitleMedium'
import TextParagraph from '../components/texts/TextParagraph'
import TitleSmall from '../components/texts/TitleSmall'
import Carousel from './Carousel'

const Content = () => {
  const state = useAppSelector(state => state.aboutReducer.data)
  const status = useAppSelector(state => state.aboutReducer.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getAboutData())
  }, [status])

  return (
    <div>
      <div className='px-8'>
        <TitleMedium text={state?.title_en ?? ''} />
        <TitleMedium text={state?.title_en ?? ''} size='text-medium' />
        <TextParagraph text={state?.bio_en ?? ''} className='mt-8' />
        <TextParagraph text={state?.bio_en ?? ''} size='text-small' className='mt-8' />
      </div>
      {state && state.logos && (
        <div className='my-8 w-full overflow-hidden'>
          <Carousel />
        </div>
      )}
      <div className='px-8 my-8'>
        <TitleSmall text='PRESS' className='opacity-50' />
        <TitleSmall text={state?.email_press ?? ''} />
        <div className='h-8'></div>
        <TitleSmall text='GENERAL INQUIRIES' className='opacity-50' />
        <TitleSmall text={state?.email_inquiries ?? ''} />
      </div>
    </div>
  )
}

export default Content
