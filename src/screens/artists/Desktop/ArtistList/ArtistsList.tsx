import { useEffect, useState } from 'react'
import styles from './ArtistsList.module.css'
// import InfiniteScroll from 'react-infinite-scroller'
import { useAppSelector } from 'src/redux/hooks'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { useDispatch } from 'react-redux'
import ArtistsListScroll from './ArtistsListScroll'

interface Props {
  filter: string
}

const ArtistList = ({ filter }: Props) => {
  const [selectedArtist, setSelectedArtist] = useState<null | ArtistModel>(null)
  const [clickedArtist, setClickedArtist] = useState<number | null>(null)
  const [artistData, setArtistData] = useState<ArtistModel[] | null>(null)

  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useDispatch()

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
      setTimeout(() => {
        const newList = artists.filter(artist => {
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

        if (newList.length === 0) {
          setSelectedArtist(null)
          setClickedArtist(null)
          return
        }

        const num = Math.floor(Math.random() * newList.length)

        handleArtistClick(newList[num])
      }, 1000)
    }
  }, [artists, filter])

  if (!artists) {
    return <></>
  }

  const handleArtistClick = (artist: ArtistModel, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setSelectedArtist(artist)
    dispatch(selectArtist(artist))
    setClickedArtist(artist.id)
  }

  useEffect(() => {
    if (clickedArtist !== null) {
      const timer = setTimeout(() => {
        setClickedArtist(null)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [clickedArtist])

  return (
    <div
      className={`relative h-screen ${styles.artistListContainer} text-center ${styles.customCursor}`}
    >
      <div className={`h-full ${styles.scrollContainer}`}>
        {artistData && (
          <ArtistsListScroll
            list={artistData}
            selected={selectedArtist}
            onSelect={handleArtistClick}
          />
        )}
      </div>

      <div
        className={`absolute bg-gradient-to-b from-black-app from-10% to-transparent h-[20vh] z-10 left-0 top-0 w-full `}
      ></div>
      <div
        className={`absolute bg-gradient-to-t from-black-app from-10% to-transparent h-[15vh] z-10 left-0 bottom-0 w-full `}
      ></div>
    </div>
  )
}

export default ArtistList
