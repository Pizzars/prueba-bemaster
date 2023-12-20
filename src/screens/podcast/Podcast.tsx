'use client'

import React from 'react'
import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../components/texts/TitleSmall'
import PodcastList from './PodcastList'
import TitleHome from '../components/texts/TitleHome'
import { useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'

const Podcast = () => {
  const status = useAppSelector(state => state.podcastsReducer.status)

  return (
    <>
      <Loading type={PageLoad.PODCASTS} status={status} />
      <div className='px-8 py-12 desk:p-12 big:p-24 bg-white'>
        <TitleSmall
          text='b4bookings'
          color={TextColors.black}
          className='uppercase text-[12px] font-bold'
        />
        <TitleSection text='PODCAST' className='desk:hidden' />
        <TitleHome text='PODCAST' className='hidden desk:block mb-12' />
        <PodcastList />
      </div>
    </>
  )
}

export default Podcast
