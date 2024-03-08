'use client'
import React from 'react'
import CardHome from './components/CardHome'
import { optionsHome } from './components/optionList'
import Navbar from '../components/general/Navbar'

const Home = () => {
  return (
    <>
      <div id='secret-nav' className='fixed top-0 left-0 z-50 w-full '>
        <Navbar />
      </div>
      <section className='pt-20 desk:pt-0 flex flex-col desk:flex-row w-full min-h-screen desk:h-screen'>
        {optionsHome.map((option, i) => {
          return <CardHome key={`option-${i}`} option={option} />
        })}
      </section>
    </>
  )
}

export default Home
