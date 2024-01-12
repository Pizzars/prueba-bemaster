'use client'
import React from 'react'
import Divider from 'src/screens/components/general/Divider'
// import ArtistDates from '../Components/ArtistDates'
import ArtistSocialLinks from '../Components/ArtistSocialLinks'
import ArtistInfo from '../Components/ArtistInfo'
import ArtistImageCarousel from '../Components/ArtistImageCarousel'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import {
  // noEventsMessage,
  ulrBack
} from 'src/utils/consts'
import {
  // filterFutureEvents,
  formatDescription
} from 'src/utils/functions'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import TextIcon, { TextIcons } from 'src/screens/components/icons/TextIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
import Link from 'next/link'
import { selectArtist, setFilter } from 'src/redux/features/artistsSlice'
import { getArtistEvents } from 'src/redux/features/eventsSlice'

interface Params {
  artist: ArtistModel
}
const ArtistByIdDesktop = ({ artist }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const dispatch = useAppDispatch()

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

  if (!artist) return null

  return (
    <div className='bg-white px-10 py-14 flex flex-col items-start'>
      <Link
        href='/artists'
        onClick={() => {
          dispatch(selectArtist(artist))
          dispatch(getArtistEvents(artist.name))
          dispatch(setFilter(artist.territory))
        }}
        className={`flex mx-6 justify-end items-center mb-8 overflow-hidden relative z-20 cursor-pointer transition-all delay-300`}
      >
        <TextIcon icon={TextIcons.LEFT_ARROW} color={TextColors.black} cursor />
        <TitleSmall
          text='go Back'
          className='ml-2 uppercase swis font-bold whitespace-nowrap cursor black-cursor dark-cursor'
        />
      </Link>
      <div className='relative flex w-full' style={{ minHeight: '100vh' }}>
        <div className='w-[70%] flex flex-col ml-8 mr-10'>
          <div className='flex flex-col'>
            <TitleHome
              text={`${artist.name?.replace(' ', '\n')}`}
              className='desk:text-[48px] desk:leading-[44px]'
            />
            <TextParagraph
              text={`${(artist.territory ?? '').replaceAll('_', ' ')} ${artist.info ?? ''}`}
              className='uppercase mt-2 opacity-40 desk:text-[24px] desk:leading-[24px]'
            />
          </div>
          <Divider />

          <div className='w-full flex mt-4 '>
            <div className='w-1/3'>
              <ArtistSocialLinks links={socialLinks} column />
            </div>

            <div className='w-2/3 px-10'>
              {/* {
                <div className='mt-6'>
                  <TitleHome
                    text={noEventsMessage[currentLanguage]}
                    className='desk:text-[24px] desk:leading-[24px]'
                  />
                </div>
              } */}
              <ArtistInfo longInfo={formattedDescription} customClassName='mt-5' />
            </div>
          </div>
        </div>

        <div className='w-[30%] mr-8 sticky top-0'>
          <ArtistImageCarousel
            profilePics={[`${ulrBack}${artist.image?.url ?? ''}`]}
            altText='Artist Name'
            byId
          />
        </div>
      </div>
    </div>
  )
}
export default ArtistByIdDesktop
