'use client'
import React, { useEffect, useState } from 'react'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import AnimatedText from '../home/AnimatedText'
import ArtistsDesk from './Desktop/ArtistsDesk'
import ArtistsMobile from './Mobile/ArtistsMobile'

const Artists = () => {
  const status = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()

  // const [filter, setFilter] = useState<string | null>('worldwide')
  const [filter, setFilter] = useState<string | null>(null)
  // const [hide, setHide] = useState(false)

  useEffect(() => {
    if (status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [status])
  return (
    <>
      {!filter && (
        <div className='w-full -mt-28 desk:mt-0 flex flex-col h-screen top-0 left-0 z-10 relative'>
          <div className='h-28 desk:h-16 z-10 big:h-24 w-full bg-black'></div>
          <div className='bg-red-400 h-full flex-1'>
            <AnimatedText artists={true} setFilter={setFilter} />
          </div>
        </div>
      )}
      {filter && (
        <div className=''>
          <div className='hidden desk:block'>
            <ArtistsDesk filter={filter} setFilter={setFilter} />
          </div>
          <div className='desk:hidden'>
            <ArtistsMobile filter={filter} setFilter={setFilter} />
          </div>
        </div>
      )}
      <div className='relative z-50'>
        <Loading type={PageLoad.ARTISTS} />
      </div>
    </>
  )
}

export default Artists
