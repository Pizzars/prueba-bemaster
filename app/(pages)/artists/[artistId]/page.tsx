'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import ArtistById from 'src/screens/artists/ArtistByIdPage'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistData } from 'src/redux/features/artistsSlice'
import { useRouter } from 'next/navigation'


const ArtistByIdPage = () => {
  const artist = useAppSelector(state => state.artistsReducer.artistById);
  console.log(artist, 'artist')
  const dispatch = useAppDispatch()
  const { artistId } = useParams()
  const router = useRouter()

  useEffect(() => {
    if (artistId) {
      dispatch(getArtistData(Number(artistId)))
    }
  }, [dispatch, artistId])

  return (
    <>
      <ArtistById />
    </>
  )
}

export default ArtistByIdPage
