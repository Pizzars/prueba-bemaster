import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import logo from '../../../assets/general/logo_b4.svg'
import { PageLoad } from './Loading'
import {
  aboutLoaded,
  artistsLoaded,
  bookLoaded,
  gigsLoaded,
  homeLoaded,
  podcastsLoaded,
  policyLoaded,
  legalLoaded
} from 'src/redux/features/loadSlice'

interface Params {
  status?: StateRequest | null
  type: PageLoad
}

const Load = ({ status = null, type }: Params) => {
  const [hideNum, setHideNum] = useState(0)
  const [pause, setPuase] = useState(false)
  const { home, about, artists, gigs, book, podcasts, legal, policy } = useAppSelector(
    state => state.loadReducer
  )
  const dispatch = useAppDispatch()

  const show =
    (!home && type === PageLoad.HOME) ||
    (!gigs && type === PageLoad.GISGS) ||
    (!artists && type === PageLoad.ARTISTS) ||
    (!podcasts && type === PageLoad.PODCASTS) ||
    (!about && type === PageLoad.ABOUT) ||
    (!legal && type === PageLoad.LEGAL) ||
    (!policy && type === PageLoad.POLICY) ||
    (!book && type === PageLoad.BOOK)

  const props = useSpring({
    from: {
      width: '100%',
      opacity: 1
    },
    to: {
      width: '0%',
      opacity: 0
    },
    loop: true,
    pause: pause,
    config: {
      duration: 500
    },
    onRest: () => {
      // Esta función se ejecutará cuando la animación termine
      if (hideNum > 0) {
        setPuase(true)
      }
    }
  })
  const hideSquare = useSpring({
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    },
    pause: !pause,
    config: {
      duration: 300
    },
    onRest: () => {
      console.log(hideNum, pause)

      if (hideNum < 2 && pause) {
        setHideNum(2)
      }
    }
  })

  const hideLogo = useSpring({
    from: {
      y: '0',
      opacity: 1
    },
    to: {
      y: '-100%',
      opacity: 0
    },
    pause: hideNum < 2,
    config: {
      duration: 400
    },
    onRest: () => {
      // Esta función se ejecutará cuando la animación termine
      setHideNum(3)
    }
  })
  const hideSection = useSpring({
    from: {
      y: '0'
    },
    to: {
      y: '-100%'
    },
    pause: hideNum < 3,
    config: {
      duration: 300
    },
    onRest: () => {
      setHideNum(4)
    }
  })

  useEffect(() => {
    if (hideNum > 0) {
      if (hideNum === 4) {
        switch (type) {
          case PageLoad.HOME: {
            dispatch(homeLoaded())
            break
          }
          case PageLoad.ARTISTS: {
            dispatch(artistsLoaded())
            break
          }
          case PageLoad.GISGS: {
            dispatch(gigsLoaded())
            break
          }
          case PageLoad.PODCASTS: {
            dispatch(podcastsLoaded())
            break
          }
          case PageLoad.ABOUT: {
            dispatch(aboutLoaded())
            break
          }
          case PageLoad.BOOK: {
            dispatch(bookLoaded())
            break
          }
          case PageLoad.LEGAL: {
            dispatch(legalLoaded())
            break
          }
          case PageLoad.POLICY: {
            dispatch(policyLoaded())
            break
          }
        }
      }
      return
    }
    if (status) {
      setTimeout(() => {
        setHideNum(1)
      }, 500)

      return
    }
  }, [status, hideNum])

  if (!show) return <></>

  return (
    <animated.div
      style={hideSection}
      className='preloader fixed w-full h-full top-0 left-0 bg-black z-50 flex justify-center items-center'
    >
      <div className='h-[2px] w-[12%] ml-auto flex justify-center items-center'>
        <animated.div
          style={{ ...props, opacity: pause ? '0' : '1' }}
          className='h-full w-full mr-auto bg-white'
        ></animated.div>
      </div>
      <animated.div style={hideSquare} className={`h-4 w-20 bg-black-app`}></animated.div>
      <div className='h-[2px] w-[12%] mr-auto flex justify-center items-center '>
        <animated.div
          style={{ ...props, opacity: pause ? '0' : '1' }}
          className='h-full w-full ml-auto bg-white'
        ></animated.div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10'>
        <animated.div style={hideLogo} className='loader w-16 h-16 '>
          <img src={logo.src} className='w-full h-full object-contain' alt='gif loader' />
        </animated.div>
      </div>
    </animated.div>
  )
}

export default Load
