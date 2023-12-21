'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import TextIcon, { TextIcons } from '../../components/icons/TextIcon'
import TitleMedium from '../../components/texts/TitleMedium'
import ArtistDetailsMobile from './ArtistDetails/ArtistDetailsMobile'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { useAppSelector } from 'src/redux/hooks'
import { useDispatch } from 'react-redux'
import { selectArtist } from 'src/redux/features/artistsSlice'

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
  const [selectedArtist, setSelectedArtist] = useState<null | ArtistModel>(null)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [nextArtist, setNextArtist] = useState<string | null>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  const containerRef = useRef(null)

  if (!artists) return <></>

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
      if (artist.territory == filter) {
        return true
      }
      return false
    })
  ]

  const sortedArtists = [...artistData].sort((a, b) => (a.name || '').localeCompare(b.name || ''))

  const props = useSpring({
    height: open ? contentHeight : 0,
    opacity: open ? 1 : 0,
    onRest: () => {
      if (!open) {
        setSelectedArtist(nextArtist as any)
        setNextArtist(null)
      }
    },
    reset: true
  })

  useEffect(() => {
    if (selectedArtist !== null) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [selectedArtist])

  useEffect(() => {
    if (open && contentRef.current) {
      setContentHeight((contentRef.current as any).scrollHeight)
    }
  }, [open, selectedArtist])

  const handleArtistClick = (artist: ArtistModel) => {
    if (selectedArtist?.id === artist.id) {
      setOpen(!open)
    } else if (open) {
      setOpen(false)
      setSelectedArtist(artist)
    } else {
      setSelectedArtist(artist)
    }

    dispatch(selectArtist(artist))
  }

  if (!artists) {
    return null
  }
  let scrollPos = 0
  let scrollingUp = false
  if (sortedArtists.length === 0) return <></>

  const listToShow = sortedArtists.length >= 50 ? sortedArtists : updateList(sortedArtists)

  return (
    <div
      className={`flex flex-col ${customClassname} w-full pl-8 pr-6 space-y-5 pb-12 bg-white relative h-screen`}
      style={{
        paddingTop: 150
      }}
    >
      <div
        ref={containerRef}
        className='h-full overflow-y-scroll bg-white'
        onScroll={() => {
          const container = containerRef.current as any
          if (!container) return
          const item = container.children[0]
          const lastItem = container.children[container.children.length - 1]

          const pos = item.offsetTop - container.scrollTop
          const pos2 = lastItem.offsetTop - container.scrollTop
          // console.log(pos, pos2)
          // console.log(container.scrollTop, pos2)
          // console.log(window.innerHeight, pos2)
          const posBottom = pos2 - lastItem.offsetHeight - window.innerHeight
          const newScrollPos = container.scrollTop

          if (newScrollPos > scrollPos) {
            // Scroll hacia abajo
            scrollingUp = false
          } else {
            // Scroll hacia arriba
            scrollingUp = true
          }

          scrollPos = newScrollPos
          if (scrollingUp) {
            if (pos > -30 && pos < 5) {
              container.removeChild(lastItem)
              container.insertBefore(lastItem, item)
              // e.preventDefault()
              return
            }
          } else {
            if (posBottom < -10) {
              container.removeChild(item)
              container.appendChild(item)
              // e.preventDefault()
              return
            }
          }
        }}
      >
        {listToShow?.map(artist => (
          <div key={artist.id} className='flex flex-col py-4'>
            <div
              onClick={() => handleArtistClick(artist)}
              className='flex flex-row justify-between items-center'
            >
              <TitleMedium text={artist.name} className='uppercase' />
              <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
            </div>

            {selectedArtist?.id === artist.id && (
              <animated.div style={props} className='overflow-hidden'>
                <div ref={contentRef}>
                  <ArtistDetailsMobile />
                </div>
              </animated.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistsList
