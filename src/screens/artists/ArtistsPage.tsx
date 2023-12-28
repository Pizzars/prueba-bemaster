'use client'
import React, { useEffect } from 'react'
import ArtistsMobile from './Mobile/ArtistsMobile'
import ArtistsDesktop from './Desktop/ArtistsDesktop'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'

const ArtistsPage = () => {
  const { data: artists, signleStatus, status } = useAppSelector(state => state.artistsReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!artists) {
      dispatch(getArtistsData())
    }
  }, [dispatch, artists, signleStatus])

  return (
    <div className='w-full'>
      {!artists ? (
        <Loading type={PageLoad.ARTISTS} status={status} />
      ) : (
        <>
          <div className='sm:block md:hidden'>
            <ArtistsMobile />
          </div>
          <div className=' hidden md:block'>
            <ArtistsDesktop />
          </div>
        </>
      )}
    </div>
  )
}

export default ArtistsPage
