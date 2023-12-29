'use client'
import React, { useEffect } from 'react'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import ArtistsDesk from './Desktop/ArtistsDesk'
import ArtistsMobile from './Mobile/ArtistsMobile'

const Artists = () => {
  const status = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [status])
  return (
    <div>
      <div className='hidden desk:block'>
        <ArtistsDesk />
      </div>
      <div className='desk:hidden'>
        <ArtistsMobile />
      </div>
      <Loading type={PageLoad.ARTISTS} />
    </div>
  )
}

export default Artists
