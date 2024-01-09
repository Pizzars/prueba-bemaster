import React, { useEffect, useState } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { useAppSelector } from 'src/redux/hooks'

import InfiniteScrollList from './ArtistList/InfiniteScrollList'
import ItemListArtist from './ArtistList/ItemListArtist'

interface Params {
  filter: string
}

const updateList = (list: ArtistModel[]) => {
  const targetLength = 50

  while (list.length < targetLength) {
    // Duplica los elementos de la lista original
    list.push(...list.map(item => ({ ...item })))
  }
  return list
}

const InfiniteArtistList = ({ filter }: Params) => {
  const [artistData, setArtistData] = useState<ArtistModel[] | null>(null)
  const artists = useAppSelector(state => state.artistsReducer.data)

  useEffect(() => {
    if (artists) {
      setArtistData(null)
      const newList = [
        ...artists.filter(artist => {
          if (filter === 'worldwide') {
            return true
          }
          if (
            filter === 'europe' &&
            (artist.territory == 'spain' || artist.territory == 'spain_and_lantin_america')
          ) {
            return true
          }
          if (filter === 'lantin_america' && artist.territory == 'spain_and_lantin_america') {
            return true
          }
          if (filter === 'spain_and_lantin_america' && artist.territory == 'lantin_america') {
            return true
          }
          if (artist.territory == filter) {
            return true
          }
          return false
        })
      ].sort((a, b) => (a.territory || '').localeCompare(b.territory || ''))

      setTimeout(() => {
        setArtistData(newList)
      }, 100)

      // dispatch(selectArtist(newList[num]))
    }
  }, [artists, filter])

  const getList = () => {
    const listToShow = !artistData
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
