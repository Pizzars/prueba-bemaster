'use client'
import React, { useState } from 'react'
import ArtistData from './ArtistData'
import ArtistHeader, { optionsFilterArtists } from './ArtistHeader'
import InfiniteArtistList from './InfiniteArtistList'

const ArtistsDesk = () => {
  const [filter, setFilter] = useState(optionsFilterArtists[0].option)

  return (
    <div>
      <ArtistHeader setFilter={setFilter} />
      <div className='bg-black-app flex pl-8'>
        <div className='w-1/4'>
          <InfiniteArtistList filter={filter} />
        </div>
        <div className='w-3/4'>
          <ArtistData />
        </div>
      </div>
    </div>
  )
}

export default ArtistsDesk
