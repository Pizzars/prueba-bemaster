'use client'
import React, { useEffect, useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../texts/TitleSmall'
import TextSmall from '../texts/TextSmall'

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

  if (!showCookieConsent) {
    return <></>
  }
  return (
    <div className='fixed bottom-0 right-0 sm:right-14 sm:bottom-24 bg-black text-white w-full sm:w-[390px] desk:w-[350px]'>
      <div>
        <TextSmall
          text={`Utilizamos cookies propias para mejorar tu experiencia de navegación. Si continúas navegando, entendemos que aceptas nuestra política de cookies.
        `}
          color={TextColors.white}
          className='text-[12px] uppercase px-6 pt-6 pb-2 leading-[14.4px] font-bold'
        />
      </div>
      <button className='bg-white text-black py-2 w-full' onClick={handleConsent}>
        <TitleSmall text={'OK'} color={TextColors.black} className='text-[10px] uppercase' />
      </button>
    </div>
  )
}

export default Cookies
