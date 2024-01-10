import React from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { useAppSelector } from 'src/redux/hooks'

import InfiniteScrollList from './ArtistList/InfiniteScrollList'
import ItemListArtist from './ArtistList/ItemListArtist'

const updateList = (list: ArtistModel[]) => {
  const targetLength = 50
  const newList = [...list]

  while (newList.length < targetLength) {
    const listToAdd = [...list]
    // Duplica los elementos de la lista original
    newList.push(...listToAdd)
  }
  return newList
}

const InfiniteArtistList = () => {
  const artistData = useAppSelector(state => state.artistsReducer.artistData)

  if (!artistData) return <></>

  const getList = () => {
    const listToShow =
      !artistData || artistData.length === 0
        ? []
        : artistData.length >= 50
        ? artistData
        : updateList(artistData)

    if (!artistData) return <></>
    return (
      <InfiniteScrollList>
        {listToShow.map((artist, i) => {
          return <ItemListArtist key={`artists-${i}`} artist={artist} />
        })}
      </InfiniteScrollList>
    )
  }

  return (
    <div className='w-full bg-white desk:bg-black-app relative'>
      <div className='w-full h-screen'>{getList()}</div>
      <div
        className={`absolute bg-gradient-to-b from-white desk:from-black-app from-10% to-transparent h-[20vh] z-10 left-0 top-32 desk:top-0 w-full `}
      ></div>
      <div
        className={`absolute bg-gradient-to-t from-white desk:from-black-app from-10% to-transparent h-[15vh] z-10 left-0 bottom-0 w-full `}
      ></div>
    </div>
  )
}

export default InfiniteArtistList
