'use client'
import { useEffect } from 'react'
import Artists from 'src/screens/artists/Artists'
import ArtistData from 'src/screens/artists/Desktop/ArtistData'
import InfiniteScrollList from 'src/screens/artists/Desktop/ArtistList/InfiniteScrollList'
import ArtistsDesk from 'src/screens/artists/Desktop/ArtistsDesk'
import InfiniteArtistList from 'src/screens/artists/Desktop/InfiniteArtistList'
import BasePage from 'src/screens/components/general/base/BasePage'

const List = () => {
  return (
    <BasePage className='bg-artists' title='Artists'>
      <Artists />
    </BasePage>
  )
}

export default List
