'use client'
import { useEffect, useState } from 'react'
import TitleHome from '../texts/TitleHome'
import { useSpring, animated } from 'react-spring'

import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import {
  aboutLoaded,
  artistsLoaded,
  bookLoaded,
  gigsLoaded,
  homeLoaded,
  podcastsLoaded
} from 'src/redux/features/loadSlice'
import { TextColors } from 'src/utils/Colors'

export enum PageLoad {
  HOME,
  ARTISTS,
  GISGS,
  PODCASTS,
  ABOUT,
  BOOK
}

interface Params {
  status?: StateRequest | null
  callback?: () => void
  type: PageLoad
}

const Loading = ({ status = null, callback, type }: Params) => {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(false)
  const [hideNum, setHideNum] = useState(0)

  // const [load, setLoad] = useState(false)
  const dispatch = useAppDispatch()
  const { home, about, artists, gigs, book, podcasts } = useAppSelector(state => state.loadReducer)

  const show =
    (!home && type === PageLoad.HOME) ||
    (!gigs && type === PageLoad.GISGS) ||
    (!artists && type === PageLoad.ARTISTS) ||
    (!podcasts && type === PageLoad.PODCASTS) ||
    (!about && type === PageLoad.ABOUT) ||
    (!book && type === PageLoad.BOOK)

  const increment = () => {
    setTimeout(() => {
      setCount(count + 1)
    }, 20)
  }

  const props = useSpring({
    top: hideNum > 0 ? 0 : 200,
    config: { duration: 300 }
  })
  const propsParent = useSpring({
    opacity: hideNum > 1 ? 0 : 1,
    config: { duration: type === PageLoad.HOME ? 0 : 300 }
  })

  useEffect(() => {
    if (!show) {
      if (callback) callback()
      return
    }
    if (count < 50) {
      increment()
      return
    }
    if (status !== null && status !== StateRequest.SUCCESS) {
      if (count < 75) {
        increment()
        return
      }
    }
    if (count >= 100) {
      setTimeout(() => {
        setTimeout(() => {
          setHideNum(2)
        }, 500)
        setHideNum(1)
      }, 500)
      setTimeout(
        () => {
          setHide(true)
          if (callback) callback()
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
          }
        },
        type === PageLoad.HOME ? 800 : 1200
      )

      return
    }
    increment()
  }, [count, status])

  if (show && !hide) {
    return (
      <animated.div
        style={propsParent}
        className={`h-full w-full py-8 px-10 fixed top-0 left-0 flex items-end z-20 bg-purple-back-app`}
      >
        <div
          className={`h-[200px] mt-auto w-[400px] max-w-full overflow-hidden flex items-end relative`}
        >
          <TitleHome
            text={count.toString()}
            className='flex items-end ml-2 h-[200px] '
            color={TextColors.white}
          />
          <animated.div
            style={props}
            className='bg-purple-back-app w-full h-full left-0 top-[100px] absolute'
          ></animated.div>
        </div>
      </animated.div>
    )
  }

  return <></>
}

export default Loading
