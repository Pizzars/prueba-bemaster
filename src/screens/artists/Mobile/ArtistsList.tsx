'use client'
import React, { useEffect, useState } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { useAppSelector } from 'src/redux/hooks'
import ArtistsListScrollMobile from './ArtistsListScrollMobile'

interface Props {
  customClassname?: string
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

const ArtistsList: React.FC<Props> = ({ customClassname, filter }) => {
  const artists = useAppSelector(state => state.artistsReducer.data)
  const [artistData, setArtistData] = useState<ArtistModel[] | null>(null)

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
      ]
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        .sort((a, b) => (a.territory || '').localeCompare(b.territory || ''))

      setTimeout(() => {
        setArtistData(newList)
      }, 100)
    }
  }, [artists, filter])

  if (!artists) return <></>

  if (!artists) {
    return null
  }
  // if (!artistData || artistData.length === 0) return <></>

  const listToShow = !artistData
    ? []
    : artistData.length >= 50
    ? artistData
    : updateList(artistData)

  return (
    <div
      className={`flex flex-col ${customClassname} w-full pl-8 pr-6 space-y-5 pb-12 bg-white relative h-screen`}
      style={{
        paddingTop: 150
      }}
    >
      <div className='h-full overflow-y-scroll bg-white'>
        <ArtistsListScrollMobile list={listToShow} />
      </div>
    </div>
  )
}

export default ArtistsList
