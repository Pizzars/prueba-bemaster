import React, { useState } from 'react'
// import { TextColors } from 'src/utils/Colors';
import styles from './ArtistsList.module.css'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import InfiniteScroll from 'react-infinite-scroller'
import { useAppSelector } from 'src/redux/hooks'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { useDispatch } from 'react-redux'

const ArtistList = () => {
  const [selectedArtist, setSelectedArtist] = useState<null | ArtistModel>(null)
  // const [isTextClicked, setIsTextClicked] = useState(false);
  const [clickedArtist, setClickedArtist] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useDispatch()

  if (!artists) {
    return null
  }

  const artistData = [...artists]
  artistData.sort((a, b) => (a.name || '').localeCompare(b.name || ''))

  const [items, setItems] = React.useState(artistData)
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null)

  const loadMore = () => {
    if (scrollContainerRef.current) {
      if (scrollContainerRef.current.scrollTop < 10) {
        setItems(prevItems => [...artistData, ...prevItems])
        scrollContainerRef.current.scrollTop = (artistData[0] as any).offsetHeight * artists.length
      } else {
        setItems(prevItems => [...prevItems, ...artistData])
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickOnButton) {
      setClickOnButton(false)
      return
    }
    setIsDragging(true)
    setLastY(e.clientY)
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && scrollContainerRef.current) {
      const deltaY = lastY - e.clientY
      scrollContainerRef.current.scrollTop += deltaY
      setLastY(e.clientY)
    }
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  React.useLayoutEffect(() => {
    if (isDragging) {
      const handleDocumentMouseMove = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
      }
      document.addEventListener('mousemove', handleDocumentMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleDocumentMouseMove)
      }
    }
  }, [isDragging])

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }
  const [clickOnButton, setClickOnButton] = React.useState(false)

  const handleArtistClick = (artist: ArtistModel, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedArtist(artist)
    dispatch(selectArtist(artist))
    setClickedArtist(artist.id)
  }

  React.useEffect(() => {
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
      <div
        ref={scrollContainerRef}
        className={`overflow-y-scroll h-full ${styles.scrollContainer} ${
          isDragging ? 'drag noSelect' : ''
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={true}
          loader={<div key={0}></div>}
          useWindow={false}
          threshold={10}
        >
          <div className='flex items-center justify-center h-full'>
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
                      className={`hover:opacity-100 inline-block pointer transition-colors duration-600 ease-in-out
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
        </InfiniteScroll>
      </div>

      <div className={`${styles.mask} ${styles.maskTop}`}></div>
      <div className={`${styles.mask} ${styles.maskBottom}`}></div>

      {isDragging && !clickOnButton && (
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
      )}
    </div>
  )
}

export default ArtistList
