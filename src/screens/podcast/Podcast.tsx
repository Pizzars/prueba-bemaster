import React from 'react'
import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../components/texts/TitleSmall'
import PodcastList from './PodcastList'

const Podcast = () => {
  return (
    <div className='px-8 py-12'>
      <TitleSmall
        text='b4bookings'
        color={TextColors.black}
        className='uppercase text-[12px] font-bold'
      />
      <TitleSection text='PODCAST' />
      <PodcastList />
    </div>
  )
}

export default Podcast
