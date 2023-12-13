'use client'
import { useEffect, useState } from 'react'
import TitleHome from '../texts/TitleHome'

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onload = () => {
        // setLoad(true)
        alert('Loaded :D')
      }
    }
  }, [])

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
      return
    }
    increment()
  }, [count, status])

  const showHomeContent = count >= 100

  if (show && !showHomeContent) {
    return (
      <div className='h-full w-full fixed top-0 left-0 bg-gray-100 flex items-end z-20'>
        <TitleHome text={count.toString()} className='ml-10 mb-8' />
      </div>
    )
  }

  return <></>
}

export default Loading
