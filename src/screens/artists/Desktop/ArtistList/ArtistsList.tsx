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
  // const [isDragging, setIsDragging] = useState(false)

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (artists) {
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
      }, 2000)
    }
  }, [artists, filter])

  if (!artists) {
    return <></>
  }

  const artistData = [
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
  artistData
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    .sort((a, b) => (a.territory || '').localeCompare(b.territory || ''))

  // const [clickOnButton, setClickOnButton] = useState(false)

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

  // if (!items || !items.length) return <></>

  return (
    <div
      className={`relative h-screen ${styles.artistListContainer} text-center ${styles.customCursor}`}
    >
      <div
        // ref={scrollContainerRef}
        className={`h-full ${styles.scrollContainer} 
        ${
          //isDragging ? 'drag noSelect' : ''
          ''
        }`}
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
      >
        <ArtistsListScroll
          list={artistData}
          selected={selectedArtist}
          onSelect={handleArtistClick}
        />
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true}
          loader={<div key={0}></div>}
          useWindow={false}
          threshold={10}
        >
          <div className='flex items-center justify-center h-full  pl-24 pr-16'>
            <ul className='space-y-2 p-4 text-left'>
              {items.map(item => (
                <li key={item.id * Math.random()}>
                  <button
                    onMouseDown={e => {
                      e.stopPropagation()
                      setClickOnButton(true)
                    }}
                    onClick={e => {
                      handleArtistClick(item, e)
                    }}
                    className={`pointer inline-block bg-transparent border-none p-0  transition-color`}
                  >
                    <TitleSmall
                      text={item.name}
                      className={`hover:opacity-100 uppercase inline-block pointer text-start transition-colors duration-600 ease-in-out
               ${
                 clickedArtist === item.id
                   ? 'text-yellow-lime-app'
                   : selectedArtist?.id === item.id
                   ? 'text-white opacity-100'
                   : 'text-white opacity-40'
               }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </InfiniteScroll> */}
      </div>

      <div className={`${styles.mask} ${styles.maskTop}`}></div>
      <div className={`${styles.mask} ${styles.maskBottom}`}></div>

      {/* {isDragging && !clickOnButton && (
        <div
          className='fixed w-32 h-32 bg-white bg-opacity-10 rounded-full pointer-events-none z-50'
          style={{
            top: cursorPosition.y - 64 + 'px',
            left: cursorPosition.x - 64 + 'px'
          }}
        >
          <span className='inter opacity-100 desk:text-[22px] absolute top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
            △
          </span>
          <span className='inter opacity-100 desk:text-[22px] absolute bottom-[18%] left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white'>
            ▽
          </span>
        </div>
      )} */}
    </div>
  )
}

export default ArtistList
