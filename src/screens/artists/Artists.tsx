'use client'
import React, { useEffect } from 'react'
import useWindowSize from 'src/hooks/useWindowSize'
import { getArtistsData, setFilter } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getArtistEvents, getEventsData } from 'src/redux/features/eventsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import AnimatedText from '../home/AnimatedText'
import ArtistsDesk from './Desktop/ArtistsDesk'
import ArtistsMobile from './Mobile/ArtistsMobile'

const Artists = () => {
  const status = useAppSelector(state => state.artistsReducer.status)
  const filter = useAppSelector(state => state.artistsReducer.filter)
  const dispatch = useAppDispatch()
  const size = useWindowSize()
  const width = size.width ?? 0

  useEffect(() => {
    if (status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
      dispatch(getEventsData())
    }
    return () => {
      if (status === StateRequest.SUCCESS) {
        dispatch(setFilter(null))
        dispatch(getArtistEvents(null))
      }
    }
  }, [status])

  return (
    <>
      {!filter && (
        <div className='w-full -mt-28 desk:mt-0 flex flex-col h-screen top-0 left-0 z-10 relative'>
          <div className='h-28 desk:h-16 z-10 big:h-24 w-full bg-black'></div>
          <div className='bg-red-400 h-full flex-1'>
            <AnimatedText artists={true} />
          </div>
        </div>
      )}
      {filter && (
        <div className=''>
          {width > 800 ? (
            <div className='hidden desk:block'>
              <ArtistsDesk />
            </div>
          ) : (
            <div className='desk:hidden'>
              <ArtistsMobile />
            </div>
          )}
        </div>
      )}
      <div className='relative z-50'>
        <Loading type={PageLoad.ARTISTS} />
      </div>
    </>
  )
}

export default Artists
