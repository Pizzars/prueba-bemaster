'use client'
import React, { useEffect } from 'react'
import ArtistByIdMobile from './Mobile/ArtistByIdMobile'
import ArtistByIdDesktop from './Desktop/ArtistByIdDesktop'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import SwipeAlert from './Mobile/ArtistDetails/SwipeAlert'
import { getArtistEvents } from 'src/redux/features/eventsSlice'

const ArtistByIdPage = () => {
  const { artistId } = useParams()
  const { data: artists, status } = useAppSelector(state => state.artistsReducer)
  const artist = artists ? artists.find(art => art.id.toString() == artistId) : null
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (artist) {
      dispatch(getArtistEvents(artist.name))
    }
  }, [artist])
  if (!artists) return <Loading type={PageLoad.ARTISTS} status={status} />
  if (!artist) return <></>
  return (
    <div className='w-full'>
      <div className='sm:block md:hidden'>
        <ArtistByIdMobile artist={artist} />
      </div>
      <div className='hidden md:block'>
        <ArtistByIdDesktop artist={artist} />
      </div>
      <SwipeAlert />
    </div>
  )
}

export default ArtistByIdPage
