'use client'
import React from 'react' // useState // useEffect // useState,
import BasePage from 'src/screens/components/general/base/BasePage'
import Spline from 'src/screens/home/components/Spline'
import Home from 'src/screens/home/Home'
import './page.css'

const HomePage = () => {
  return (
    <BasePage navbar={false} footer={true} className='relative flex flex-col min-h-screen'>
      <div className={`fixed inset-0 -z-10`}>
        <Spline />
      </div>
      <Home />
    </BasePage>
  )
}

export default HomePage
