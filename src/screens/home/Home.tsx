'use client'
import React, { useState, useEffect } from 'react'
import TitleHome from '../components/texts/TitleHome'
import AnimatedText from './AnimatedText'
import MenuSection from './MenuSection'
import MainHeader from './MainHeader'
import { animated, useSpring } from 'react-spring'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { usePathname } from 'next/navigation'

const Home = () => {
  const artistsStatus = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)
  const [showHomeContent, setShowHomeContent] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (artistsStatus === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [artistsStatus])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastFetched = localStorage.getItem('lastArtistsFetchDate')
      const cachedData = localStorage.getItem('artistsData')
      const currentTime = new Date().getTime()

      // Si los datos están en localStorage y no han pasado 24 horas
      if (lastFetched && currentTime - Number(lastFetched) <= 24 * 60 * 60 * 1000 && cachedData) {
        setShowHomeContent(true)
        return // Finalizamos el useEffect aquí
      } else {
        dispatch(getArtistsData())
      }

      let startTimestamp: number
      const animationDuration = 2000

      const animateCount = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const elapsed = timestamp - startTimestamp

        let progress = Math.min(elapsed / animationDuration, 1)
        progress = Math.sin((progress * Math.PI) / 2)

        const newCount = Math.floor(progress * 100)

        if (newCount < 99) {
          setCount(newCount)
          window.requestAnimationFrame(animateCount)
        } else if (artistsStatus === StateRequest.SUCCESS) {
          setCount(100)
          setShowHomeContent(true)
        } else {
          setCount(99)
        }
      }
      window.requestAnimationFrame(animateCount)
    }
  }, [dispatch, artistsStatus, window])

  useEffect(() => {
    if (count === 99 && artistsStatus === StateRequest.SUCCESS) {
      setCount(100)
      setShowHomeContent(true)
    }
  }, [artistsStatus])

  const props = useSpring({
    opacity: showHomeContent ? 1 : 0,
    transform: showHomeContent ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  })

  return (
    <>
      {true ? (
        <div className='h-screen bg-gray-100 flex items-end z-20'>
          <TitleHome text={count.toString()} className='ml-10 mb-8' />
        </div>
      ) : (
        <animated.div style={props}>
          <MainHeader />
          <div className='h-screen flex-1 items-center justify-center'>
            <AnimatedText />
          </div>
          {pathname === '/' && <MenuSection />}
        </animated.div>
      )}
    </>
  )
}

export default Home
