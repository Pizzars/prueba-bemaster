import React from 'react'
import LogoIcon from 'src/screens/components/icons/LogoIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

const FooterHeader = () => {
  return (
    <section className='flex bg-white w-full items-center px-10 pt-12 pb-10'>
      <div className='flex flex-column w-full flex-col items-start'>
        <div className='mb-8'>
          <LogoIcon size='24' />
        </div>
        <div>
          <TitleSmall text={`BE FOR THE MUSIC.`} className='desk:text-basic desk:leading-basic' />
          <TitleSmall text={`BE FOR THE BOOKING.`} className='desk:text-basic desk:leading-basic' />
        </div>
      </div>
    </section>
  )
}

export default FooterHeader
