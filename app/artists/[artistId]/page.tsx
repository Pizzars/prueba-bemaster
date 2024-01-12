'use client'
import React, { useEffect } from 'react'
import ArtistById from 'src/screens/artists/ArtistByIdPage'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData, setMaxId, setMinId } from 'src/redux/features/artistsSlice'
import BasePage from 'src/screens/components/general/base/BasePage'
import { getEventsData } from 'src/redux/features/eventsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'

const ArtistByIdPage = () => {
  const dispatch = useAppDispatch()
  const artists = useAppSelector(state => state.artistsReducer.data)
  const status = useAppSelector(state => state.artistsReducer.status)

  useEffect(() => {
    if (status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
      dispatch(getEventsData())
    }
  }, [dispatch, status])

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
