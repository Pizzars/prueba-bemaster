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

  // const [filter, setFilter] = useState<string | null>(null)
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
        <div className='w-full h-screen top-0 left-0 z-50 relative'>
          <AnimatedText artists={true} setFilter={setFilter} />
        </div>
      )}
      {filter && (
        <div>
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
