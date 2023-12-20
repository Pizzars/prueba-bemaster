'use client'
import React from 'react'
import ArtistByIdMobile from './Mobile/ArtistByIdMobile'
import ArtistByIdDesktop from './Desktop/ArtistByIdDesktop'
import { useParams } from 'next/navigation'
import { useAppSelector } from 'src/redux/hooks'
import Loading, { PageLoad } from '../components/general/Loading'
import SwipeAlert from './Mobile/ArtistDetails/SwipeAlert'

const ArtistByIdPage = () => {
  const { artistId } = useParams()
  const { data: artists, status } = useAppSelector(state => state.artistsReducer)
  if (!artists) return <Loading type={PageLoad.ARTISTS} status={status} />
  const artist = artists.find(art => art.id.toString() == artistId)
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
