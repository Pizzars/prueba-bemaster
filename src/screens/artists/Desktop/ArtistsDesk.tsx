'use client'
import React from 'react'
import { selectArtist, setFilter } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import ArtistsSelection from '../Components/ArtistsSelection'
import ArtistData from './ArtistData'
import ArtistHeader, { optionsFilterArtists } from './ArtistHeader'
import InfiniteArtistList from './InfiniteArtistList'

const ArtistsDesk = () => {
  const artist = useAppSelector(state => state.artistsReducer.artist)
  const filter = useAppSelector(state => state.artistsReducer.filter)
  const dispatch = useAppDispatch()

  if (!filter) return <></>
  return (
    <div
      className={`relative pt-16 big:pt-24 min-h-screen transform delay-300 ${
        !filter ? 'bg-black-app' : 'bg-transparent'
      }`}
    >
      <div
        className={`relative pt-16 big:pt-24 min-h-screen transform delay-300 ${
          !artist ? 'bg-black-app' : 'bg-transparent'
        }`}
      >
        <ArtistHeader
          selected={filter ?? optionsFilterArtists[0].option}
          setFilter={option => {
            dispatch(selectArtist(null))
            dispatch(setFilter(option))
          }}
        />

        {!artist ? (
          <ArtistsSelection />
        ) : (
          <div className='bg-black-app flex pl-8'>
            <div className='w-1/4'>
              <InfiniteArtistList />
            </div>
            <div className='w-3/4'>
              <ArtistData />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArtistsDesk
