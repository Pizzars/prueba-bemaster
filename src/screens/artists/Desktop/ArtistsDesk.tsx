'use client'
import React from 'react'
import ArtistData from './ArtistData'
import ArtistHeader, { optionsFilterArtists } from './ArtistHeader'
import InfiniteArtistList from './InfiniteArtistList'

interface Params {
  filter: string | null
  setFilter: (value: string) => void
}

const ArtistsDesk = ({ filter, setFilter }: Params) => {
  return (
    <div className='relative'>
      <ArtistHeader selected={filter ?? optionsFilterArtists[0].option} setFilter={setFilter} />
      <div className='bg-black-app flex pl-8'>
        <div className='w-1/4'>
          <InfiniteArtistList filter={filter ?? optionsFilterArtists[0].option} />
        </div>
        <div className='w-3/4'>
          <ArtistData />
        </div>
      </div>
    </div>
  )
}

export default ArtistsDesk
