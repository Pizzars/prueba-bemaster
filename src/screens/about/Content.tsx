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

  const emails = () => {
    return (
      <div className='px-8 my-8 desk:pl-0 desk:m-0'>
        <TitleSmall
          text='PRESS'
          className='opacity-50 desk:text-white big:text-[0.75vw] super:text-[14px]'
        />
        <TitleSmall
          text={state?.email_press ?? ''}
          className='desk:text-white big:text-[0.75vw] super:text-[14px]'
        />
        <div className='h-8'></div>
        <TitleSmall
          text='GENERAL INQUIRIES'
          className='opacity-50 desk:text-white big:text-[0.75vw] super:text-[14px]'
        />
        <TitleSmall
          text={state?.email_inquiries ?? ''}
          className='desk:text-white big:text-[0.75vw] super:text-[14px]'
        />
      </div>
    )
  }

  return (
    <>
      <div>
        <div className='px-8 desk:p-16 big:p-24 desk:flex'>
          <div className='hidden desk:block'>{emails()}</div>
          <div className='desk:ml-auto desk:px-8 desk:w-[50vw] super:w-[1000px] big:mr-auto big:ml-[8vw] super:ml-[151px]'>
            <TitleMedium
              text={state?.title_en ?? ''}
              className='desk:text-white desk:w-[30vw] desk:leading-[1.4] big:text-[1.8vw] big:w-[65%] super:text-[32px]'
            />
            <TextParagraph
              text={state?.bio_en ?? ''}
              className='mt-8 desk:text-white desk:w-[84%]'
            />
          </div>
        </div>
        {state && state.logos && (
          <div className='my-8 desk:my-0 desk:pb-12 w-full overflow-hidden'>
            <Carousel />
          </div>
        )}
        <div className='desk:hidden'>{emails()}</div>
      </div>
    </>
  )
}

export default Content
