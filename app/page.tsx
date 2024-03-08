'use client'
import React from 'react' // useState // useEffect // useState,
import BasePage from 'src/screens/components/general/base/BasePage'
import Home from 'src/screens/home/Home'
import './page.css'

const HomePage = () => {
  return (
    <BasePage
      navbar={false}
      footer={false}
      // className='relative flex flex-col min-h-screen bg-purple-back-app'
      className='relative flex flex-col min-h-screen bg-gray-app'
    >
      <Home />
    </BasePage>
  )
}

export default HomePage
