'use client'
import React, { useEffect, useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../texts/TitleSmall'
import TextSmall from '../texts/TextSmall'
import { useAppSelector } from 'src/redux/hooks'
import { homeTexts } from 'src/screens/home/components/textsHome'

const Cookies = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent')
      if (consent === 'accepted') {
        setShowCookieConsent(false)
      }
    }
  }, [])

  const handleConsent = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'accepted')
      setShowCookieConsent(false)
    }
  }
  const currentLanguage = useAppSelector(state => state.languageReducer.language)

  if (!showCookieConsent) {
    return <></>
  }
  return (
    <div className='fixed bottom-0 right-0 sm:right-14 sm:bottom-40 bg-black text-white w-full sm:w-[390px] desk:w-[380px]'>
      <div>
        <TextSmall
          text={homeTexts.textCookies[currentLanguage]}
          color={TextColors.white}
          className='text-[12px] uppercase p-6 leading-[14.4px] font-bold'
        />
      </div>
      <button
        className='bg-white text-black py-2 w-full  cursor dark-cursor'
        onClick={handleConsent}
      >
        <TitleSmall
          text={homeTexts.textOk[currentLanguage]}
          color={TextColors.black}
          className='text-[10px] uppercase cursor dark-cursor'
        />
      </button>
    </div>
  )
}

export default Cookies
