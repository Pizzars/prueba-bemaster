'use client'
import StatusComponent from './StatusComponent'
import { useEffect } from 'react'
import { getAboutData } from 'src/redux/features/aboutSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const AboutExample = () => {
  const aboutState = useAppSelector(state => state.aboutReducer.data)
  const aboutStatus = useAppSelector(state => state.aboutReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAboutData())
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div>
        Status: <StatusComponent status={aboutStatus} />
      </div>
      <div>
        About Data:
        <div className='text-orange-600'>{aboutState?.bio_en}</div>
        <div className='text-pink-600'>{aboutState?.bio_es}</div>
      </div>
    </div>
  )
}

export default AboutExample
