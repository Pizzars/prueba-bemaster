import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
// import ArtistDates from '../Components/ArtistDates'
import ArtistSocialLinks from '../Components/ArtistSocialLinks'
import ArtistInfo from '../Components/ArtistInfo'
import ArtistImageCarousel from '../Components/ArtistImageCarousel'
import SwipeForMore from 'src/screens/components/general/SwipeForMore'
import {
  // filterFutureEvents,
  formatDescription
} from 'src/utils/functions'
import {
  // noEventsMessage,
  ulrBack
} from 'src/utils/consts'
// import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useRouter } from 'next/navigation'
import { useSwipeable } from 'react-swipeable'
import { useSpring, animated } from 'react-spring'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'

interface Params {
  artist: ArtistModel
}

const ArtistByIdMobile = ({ artist }: Params) => {
  const [direction, setDirection] = useState('next')
  // const artist = useAppSelector(state => state.artistsReducer.artistById)
  // const artist = useAppSelector(state => state.artistsReducer.artistById)
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const [showSwipeForMore, setShowSwipeForMore] = useState(false)
  // const filteredEvents = filterFutureEvents(artist?.events, 3)
  const profilePics = [`${ulrBack}${artist?.image?.url ?? ''}`]
  const description = currentLanguage === 'EN' ? artist?.description_en : artist?.description_es
  const formattedDescription = formatDescription(description)
  const minId = useAppSelector(state => state.artistsReducer.minId)
  const maxId = useAppSelector(state => state.artistsReducer.maxId)

  const router = useRouter()

  const handlers = useSwipeable({
    onSwipedRight: () => {
      goToNextArtist()
      setDirection('prev')
    },
    onSwipedLeft: () => {
      goToPrevArtist()
      setDirection('next')
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  const currentArtistId = artist?.id

  const [slideAnimation, setSlideAnimation] = useSpring(() => ({
    from: { transform: 'translate3d(0%,0,0)' },
    to: { transform: 'translate3d(0%,0,0)' }
  }))

  useEffect(() => {
    setSlideAnimation({
      from: { transform: `translate3d(${direction === 'next' ? '-100%' : '100%'},0,0)` },
      to: { transform: 'translate3d(0%,0,0)' }
    })
  }, [currentArtistId, direction])

  const goToPrevArtist = () => {
    if (currentArtistId && minId && maxId) {
      const prevArtistId = currentArtistId > minId ? currentArtistId - 1 : maxId
      router.replace(`/artists/${prevArtistId}`)
    }
  }

  const goToNextArtist = () => {
    if (currentArtistId && minId && maxId) {
      const nextArtistId = currentArtistId < maxId ? currentArtistId + 1 : minId
      router.push(`/artists/${nextArtistId}`)
    }
  }

  const socialLinks = artist
    ? [
        { type: 'PRESS KIT', url: artist.press_kit || 'N/A' },
        { type: 'ARTWORK REQ.', url: artist.artwork || 'N/A' },
        { type: 'Facebook', url: artist.facebook || 'https://www.facebook.com/' },
        { type: 'Twitter', url: artist.twitter || 'https://www.twitter.com/' },
        { type: 'Instagram', url: artist.instagram || 'https://www.instagram.com/' },
        { type: 'Soundcloud', url: artist.SoundCloud || 'https://www.soundcloud.com/' },
        { type: 'Spotify', url: artist.spotify || 'https://www.spotify.com/' },
        { type: 'Beatport', url: artist.beatport || 'https://www.beatport.com/' }
      ]
    : []

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastShownTime = localStorage.getItem('swipeForMoreLastShown')
      const currentTime = new Date().getTime()
      const twentyFourHours = 24 * 60 * 60 * 1000

      if (lastShownTime) {
        const timeSinceLastShown = currentTime - parseInt(lastShownTime)
        if (timeSinceLastShown > twentyFourHours) {
          setShowSwipeForMore(true)
          localStorage.setItem('swipeForMoreLastShown', currentTime.toString())
        }
      } else {
        setShowSwipeForMore(true)
        localStorage.setItem('swipeForMoreLastShown', currentTime.toString())
      }
    }
  }, [window])

  return (
    <animated.div style={slideAnimation} {...handlers} className='relative'>
      <ArtistImageCarousel
        profilePics={profilePics.length > 0 ? profilePics : ['defaultProfilePic.jpg']}
        altText={`${artist?.name} Profile`}
      />
      <div className='px-8'>
        {
          // filteredEvents.length > 0 ? (
          //   filteredEvents.map(event => (
          //     <ArtistDates
          //       key={event.id}
          //       date={event.date}
          //       venue={event.venue}
          //       location={event.location}
          //       customClassName='mt-6'
          //     />
          //   ))
          // ) :
          // <div className='mt-6'>
          //   <TitleSmall
          //     text={noEventsMessage[currentLanguage]}
          //     className='desk:text-[24px] desk:leading-[24px]'
          //   />
          // </div>
        }
        <div className='mt-7 mb-4'>
          <ArtistSocialLinks links={socialLinks} gap={14} />
        </div>
        <ArtistInfo longInfo={formattedDescription} customClassName='mb-0' />
      </div>
      {showSwipeForMore && <SwipeForMore />}
    </animated.div>
  )
}

export default ArtistByIdMobile
