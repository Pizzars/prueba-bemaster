'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import ArtistById from 'src/screens/artists/ArtistByIdPage'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistData } from 'src/redux/features/artistsSlice'
import BasePage from 'src/screens/components/general/base/BasePage'

const ArtistByIdPage = () => {
  const artist = useAppSelector(state => state.artistsReducer.artistById)
  console.log(artist, 'artist')
  const dispatch = useAppDispatch()
  const { artistId } = useParams()

  useEffect(() => {
    if (artistId) {
      dispatch(getArtistData(Number(artistId)))
    }
  }, [dispatch, artistId])

  return (
    <BasePage className='bg-artists'>
      <ArtistById />
    </BasePage>
  )
}

export default ArtistByIdPage
