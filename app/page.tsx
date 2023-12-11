'use client'
import React from 'react' // useState // useEffect // useState,
import BasePage from 'src/screens/components/general/base/BasePage'
import Spline from 'src/screens/home/components/Spline'
import Home from 'src/screens/home/Home'
import './page.css'
import Cookies from 'src/screens/components/general/Cookies'

const HomePage = () => {
  return (
    <BasePage navbar={false} footer={true} className='relative flex flex-col min-h-screen'>
      <div className={`fixed inset-0 -z-10`}>
        <Spline />
      </div>
      <div className='flex-grow custom-gradient'>
        <>
          <Home />
          <Cookies />
        </>
      </div>
    </BasePage>
  )
}

export default HomePage
