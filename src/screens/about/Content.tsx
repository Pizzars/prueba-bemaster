'use client'

import { useEffect, useRef } from 'react'
import { getAboutData } from 'src/redux/features/aboutSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TitleMedium from '../components/texts/TitleMedium'
import TextParagraph from '../components/texts/TextParagraph'
import TitleSmall from '../components/texts/TitleSmall'
import Carousel from './Carousel'
import { TextTags } from '../components/texts/TextBase'

const Content = () => {
  const state = useAppSelector(state => state.aboutReducer.data)
  const status = useAppSelector(state => state.aboutReducer.status)
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getAboutData())
    if (status === StateRequest.SUCCESS) {
      const container = ref.current
      if (!container) return
      const list = container.querySelectorAll('.word')

      window.onscroll = () => {
        if (window.innerWidth < 1024) return

        const h = window.innerHeight / 1.5
        const hContainer = container.offsetHeight
        const position = container.getBoundingClientRect().top - h
        const positionBottom = position + hContainer
        const size = hContainer / list.length
        const top = hContainer - positionBottom

        list.forEach((word: any, i) => {
          const start = size * i
          const end = i === list.length ? size * i : size * (i + 1)

          if (top >= start && top <= end) {
            const percentage = ((positionBottom - start) / size) * 100

            // Utiliza el porcentaje para aplicar el gradiente al elemento actual
            const p = Math.max(0, Math.min(100, percentage))
            word.style.backgroundImage = `linear-gradient(to right, white ${p}%, rgba(255, 255, 255, 0.4) ${p}%)`
          } else if (top >= start) {
            word.style.backgroundImage = `linear-gradient(to right, white 100%, rgba(255, 255, 255, 0.4) 100%)`
          } else {
            word.style.backgroundImage = `linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.4) 0%)`
          }
        })
      }
    }
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

  const getBio = (text: string) => {
    return (
      <div ref={ref}>
        {text.split('\n').map((tx, i) => {
          return (
            <p key={`pr-${i}`}>
              {tx.split(' ').map((word, j) => {
                return (
                  <span
                    className='text-gradient word inline-block mr-2 transition delay-300'
                    key={`word-${i}-${j}`}
                    style={{
                      backgroundImage: `linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.5) 0%)`
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </p>
          )
        })}
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
              // text={state?.bio_en ?? ''}
              text={getBio(state?.bio_en ?? '')}
              className='hidden desk:block mt-8 desk:text-white desk:w-[84%]'
              tag={TextTags.DIV}
            />
            <TextParagraph
              text={state?.bio_en ?? ''}
              className='desk:hidden mt-8 desk:text-white desk:w-[84%]'
            />
            {/* <TextParagraph
              text={
                <div
                  className='text-gradient'
                  style={{
                    backgroundImage: `linear-gradient(to right, white 100%, rgba(255, 255, 255, 0.5) 100%)`
                  }}
                >
                  B4Bookings is an agency with a comprehensive
                </div>
              }
              className=' desk:text-white desk:w-[84%] text-gradient'
            /> */}
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
