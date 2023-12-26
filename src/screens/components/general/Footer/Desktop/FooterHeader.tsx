import React from 'react'
import { useAppSelector } from 'src/redux/hooks'
import LogoIcon from 'src/screens/components/icons/LogoIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { homeTexts } from 'src/screens/home/components/textsHome'

const FooterHeader = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  return (
    <section className='flex bg-white w-full items-center px-10 pt-12 pb-10'>
      <div className='flex flex-column w-full flex-col items-start'>
        <div className='mb-8'>
          <LogoIcon size='24' />
        </div>
        <div>
          <TitleSmall text={homeTexts.textFooterMusic[currentLanguage]} className='desk:text-basic desk:leading-basic' />
          <TitleSmall text={homeTexts.textFooterBooking[currentLanguage]} className='desk:text-basic desk:leading-basic' />
        </div>
      </div>
    </section>
  )
}

export default FooterHeader
