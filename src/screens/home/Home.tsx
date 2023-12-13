'use client'
import React, { useEffect } from 'react'
// import TitleHome from '../components/texts/TitleHome'
import AnimatedText from './AnimatedText'
import MenuSection from './MenuSection'
import MainHeader from './MainHeader'
import { animated, useSpring } from 'react-spring'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { usePathname } from 'next/navigation'
import Loading, { PageLoad } from '../components/general/Loading'

const Home = () => {
  const artistsStatus = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()
  // const [count, setCount] = useState(0)
  const pathname = usePathname()

  const { home } = useAppSelector(state => state.loadReducer)

  useEffect(() => {
    if (artistsStatus === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [artistsStatus])

  useEffect(() => {
    // const lastFetched = localStorage.getItem('lastArtistsFetchDate')
    // const cachedData = localStorage.getItem('artistsData')
    // const currentTime = new Date().getTime()

    // // Si los datos están en localStorage y no han pasado 24 horas
    // if (lastFetched && currentTime - Number(lastFetched) <= 24 * 60 * 60 * 1000 && cachedData) {
    //   setShowHomeContent(true)
    //   return // Finalizamos el useEffect aquí
    // } else {
    if (artistsStatus === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
    // }
  }, [dispatch, artistsStatus])

  const props = useSpring({
    opacity: home ? 1 : 0,
    transform: home ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  })

  return (
    <>
      <animated.div style={props}>
        <MainHeader />
        <div className='h-screen flex-1 items-center justify-center'>
          {artistsStatus === StateRequest.SUCCESS && <AnimatedText />}
        </div>
        {pathname === '/' && <MenuSection />}
      </animated.div>

      {!home && <Loading type={PageLoad.HOME} status={artistsStatus} />}
    </>
  )
}

export default Home
