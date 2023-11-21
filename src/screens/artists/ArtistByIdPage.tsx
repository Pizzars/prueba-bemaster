'use client'
import React from 'react'
import ArtistByIdMobile from './Mobile/ArtistByIdMobile'
import ArtistByIdDesktop from './Desktop/ArtistByIdDesktop'
import { useParams } from 'next/navigation'
import { useAppSelector } from 'src/redux/hooks'

const ArtistByIdPage = () => {
  const { artistId } = useParams()
  const artists = useAppSelector(state => state.artistsReducer.data)
  if (!artists) return <></>
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
    </div>
  )
}

export default ArtistByIdPage
