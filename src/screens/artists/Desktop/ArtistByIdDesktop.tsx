'use client'
import React, { useEffect, useState } from 'react'
import Divider from 'src/screens/components/general/Divider'
import ArtistDates from '../Components/ArtistDates'
import ArtistSocialLinks from '../Components/ArtistSocialLinks'
import ArtistInfo from '../Components/ArtistInfo'
import ArtistImageCarousel from '../Components/ArtistImageCarousel'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleHome from 'src/screens/components/texts/TitleHome'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import { useAppSelector } from 'src/redux/hooks'
import { noEventsMessage, ulrBack } from 'src/utils/consts'
import { filterFutureEvents, formatDescription } from 'src/utils/functions'
import { useRouter } from 'next/navigation'
import { useSpring, animated } from 'react-spring'

const ArtistByIdDesktop = () => {
  const [direction, setDirection] = useState('next')
  const artist = useAppSelector(state => state.artistsReducer.artistById)
  const minId = useAppSelector(state => state.artistsReducer.minId)
  const maxId = useAppSelector(state => state.artistsReducer.maxId)
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const router = useRouter()

  const socialLinks = [
    { type: 'PRESS KIT', url: artist?.press_kit || 'N/A' },
    { type: 'ARTWORK REQ.', url: artist?.artwork || 'N/A' },
    { type: 'Facebook', url: artist?.facebook || 'https://www.facebook.com/' },
    { type: 'Twitter', url: artist?.twitter || 'https://www.twitter.com/' },
    { type: 'Instagram', url: artist?.instagram || 'https://www.instagram.com/' },
    { type: 'Soundcloud', url: artist?.SoundCloud || 'https://www.soundcloud.com/' },
    { type: 'Spotify', url: artist?.spotify || 'https://www.spotify.com/' },
    { type: 'Beatport', url: artist?.beatport || 'https://www.beatport.com/' }
  ]

  const description = currentLanguage === 'EN' ? artist?.description_en : artist?.description_es
  const formattedDescription = formatDescription(description)
  const filteredEvents = filterFutureEvents(artist?.events, 2)

  const currentArtistId = artist?.id

  const goToPrevArtist = () => {
    setDirection('prev')
    if (currentArtistId && minId && maxId) {
      const prevArtistId = currentArtistId > minId ? currentArtistId - 1 : maxId
      router.replace(`/artists/${prevArtistId}`)
    }
  }

  const goToNextArtist = () => {
    setDirection('next');
    if (currentArtistId && minId && maxId) {
      const nextArtistId = currentArtistId < maxId ? currentArtistId + 1 : minId
      router.push(`/artists/${nextArtistId}`)
    }
  }

  const [slideAnimation, setSlideAnimation] = useSpring(() => ({
    from: { transform: 'translate3d(100%,0,0)' },
    to: { transform: 'translate3d(0%,0,0)' }
  }))

  useEffect(() => {
    setSlideAnimation({
      from: { transform: `translate3d(${direction === 'next' ? '100%' : '-100%'},0,0)` },
      to: { transform: 'translate3d(0%,0,0)' }
    });
  }, [currentArtistId, direction]);

  if (!artist) return null

  return (
    <animated.div style={slideAnimation}>
      <div className='bg-white relative flex px-10 py-14 w-full' style={{ minHeight: '100vh' }}>
        {/* Flecha izquierda */}
        <button
          className='absolute top-[300px] left-8 transform -translate-y-1/2 text-4xl'
          onClick={goToPrevArtist}
        >
          <TextIcon
            icon={TextIcons.LEFT_ARROW}
            size={SizeIcons.TITLE_MEDIUM}
            className='desk:text-[24px] desk:leading-[24px]'
          />
        </button>

        <div className='w-[70%] flex flex-col ml-8 mr-10'>
          <div className='flex flex-col'>
            <TitleHome
              text={`${artist?.name?.replace(' ', '\n')}`}
              className='desk:text-[48px] desk:leading-[44px]'
            />
            <TextParagraph
              text={`${(artist?.territory as any)?.data?.attributes.Territory}`}
              className='uppercase mt-2 opacity-40 desk:text-[24px] desk:leading-[24px]'
            />
          </div>
          <Divider />

          <div className='w-full flex mt-4 '>
            <div className='w-1/3'>
              <ArtistSocialLinks links={socialLinks} column />
            </div>

            <div className='w-2/3 px-10'>
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <ArtistDates
                    key={event.id}
                    date={event.date}
                    venue={event.venue}
                    location={event.location}
                    customClassName='mt-6'
                  />
                ))
              ) : (
                <div className='mt-6'>
                  <TitleHome
                    text={noEventsMessage[currentLanguage]}
                    className='desk:text-[24px] desk:leading-[24px]'
                  />
                </div>
              )}
              <ArtistInfo longInfo={formattedDescription} customClassName='mt-5' />
            </div>
          </div>
        </div>

        <div className='w-[30%] mr-8'>
          <ArtistImageCarousel
            profilePics={[`${ulrBack}${artist.image?.url ?? ''}`]}
            altText='Artist Name'
            byId
          />
        </div>

        {/* Flecha derecha */}
        <button
          className='absolute top-[300px] right-8 transform -translate-y-1/2 text-4xl'
          onClick={goToNextArtist}
        >
          <TextIcon
            icon={TextIcons.RIGHT_ARROW}
            size={SizeIcons.TITLE_MEDIUM}
            className='desk:text-[24px] desk:leading-[24px]'
          />
        </button>
      </div>
    </animated.div>
  )
}
export default ArtistByIdDesktop
