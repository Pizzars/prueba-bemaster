'use client'
import React, { useEffect } from 'react'
// import TitleHome from '../components/texts/TitleHome'
import AnimatedText from './AnimatedText'
import MenuSection from './MenuSection'
import MainHeader from './MainHeader'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { usePathname } from 'next/navigation'
import Loading, { PageLoad } from '../components/general/Loading'
// import Spline from './components/Spline'

const Home = () => {
  const artistsStatus = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()

  const pathname = usePathname()

  useEffect(() => {
    if (artistsStatus === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [artistsStatus])

  useEffect(() => {
    if (artistsStatus === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [dispatch, artistsStatus])

  return (
    <>
      {/* <Spline /> */}
      <div className='bg-home fixed inset-0 -z-10'></div>
      <MainHeader />
      <div className='h-screen flex-1 items-center justify-center'>
        {artistsStatus === StateRequest.SUCCESS && <AnimatedText />}
      </div>

      {pathname === '/' && <MenuSection />}

      <Loading type={PageLoad.HOME} status={artistsStatus} />
    </>
  )
}

export default Home
