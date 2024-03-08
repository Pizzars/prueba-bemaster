'use client'
import React from 'react'
import FooterBottom from './FooterBottom'
import FooterCenter from './FooterCenter'

const Footer = () => {
  return (
    <div className='flex flex-col w-full backdrop-blur-sm'>
      <div className='flex flex-col w-full p-16 big:p-24'>
        <FooterCenter />
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer
