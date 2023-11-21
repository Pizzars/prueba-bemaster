'use client'
import React, { useEffect } from 'react'
import ArtistById from 'src/screens/artists/ArtistByIdPage'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData, setMaxId, setMinId } from 'src/redux/features/artistsSlice'
import BasePage from 'src/screens/components/general/base/BasePage'

const ArtistByIdPage = () => {
  const dispatch = useAppDispatch()
  const artists = useAppSelector(state => state.artistsReducer.data)

  useEffect(() => {
    if (!artists) {
      dispatch(getArtistsData())
    }
  }, [dispatch, artists])

  useEffect(() => {
    if (artists) {
      const artistIds = artists.map(artist => artist.id)
      const maxId = Math.max(...artistIds)
      const minId = Math.min(...artistIds)

      dispatch(setMinId(minId))
      dispatch(setMaxId(maxId))
    }
  }, [dispatch, artists])

  // useEffect(() => {
  //   if (artistId) {
  //     // dispatch(getArtistData(Number(artistId)));
  //   }
  // }, [dispatch, artistId]);

  return (
    <BasePage className='bg-artists' title='Artists'>
      <ArtistById />
    </BasePage>
  )
}

export default ArtistByIdPage
