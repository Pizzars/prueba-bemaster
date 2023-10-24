import React from 'react'
import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../components/texts/TitleSmall'
import PodcastList from './PodcastList'
import TitleHome from '../components/texts/TitleHome'

const Podcast = () => {
  return (
    <div className='px-8 py-12 desk:p-12 big:p-24'>
      <TitleSmall
        text='b4bookings'
        color={TextColors.black}
        className='uppercase text-[12px] font-bold'
      />
      <TitleSection text='PODCAST' className='desk:hidden' />
      <TitleHome
        text='PODCAST'
        className='hidden desk:block mb-12'
        size='text-[48px] leading-[43.2px] desk:text-[90px] desk:leading-[81px] big:text-[180px] big:leading-[162px]'
      />
      <PodcastList />
    </div>
  )
}

export default Podcast
