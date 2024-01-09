'use client'
import React from 'react'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import ArtistsSelection from '../Components/ArtistsSelection'
import ArtistData from './ArtistData'
import ArtistHeader, { optionsFilterArtists } from './ArtistHeader'
import InfiniteArtistList from './InfiniteArtistList'

interface Params {
  filter: string | null
  setFilter: (value: string) => void
}

const ArtistsDesk = ({ filter, setFilter }: Params) => {
  const artist = useAppSelector(state => state.artistsReducer.artist)
  const dispatch = useAppDispatch()
  return (
    <div
      className={`relative pt-16 big:pt-24 min-h-screen transform delay-300 ${
        !artist ? 'bg-black-app' : 'bg-transparent'
      }`}
    >
      <ArtistHeader
        selected={filter ?? optionsFilterArtists[0].option}
        setFilter={option => {
          dispatch(selectArtist(null))
          setFilter(option)
        }}
      />

      {!artist ? (
        <ArtistsSelection filter={filter} />
      ) : (
        <div className='bg-black-app flex pl-8'>
          <div className='w-1/4'>
            <InfiniteArtistList filter={filter ?? optionsFilterArtists[0].option} />
          </div>
          <div className='w-3/4'>
            <ArtistData />
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtistsDesk
