import React from 'react'
import Divider from 'src/screens/components/general/Divider'
// import ArtistDates from '../../Components/ArtistDates'
import ArtistSocialLinks from '../../Components/ArtistSocialLinks'
import ArtistImage from '../../Components/ArtistImage'
import ArtistInfo from '../../Components/ArtistInfo'
import Link from 'next/link'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useAppSelector } from 'src/redux/hooks'
import {
  // noEventsMessage,
  ulrBack
} from 'src/utils/consts'
import {
  // filterFutureEvents,
  formatDescription,
  truncateText
} from 'src/utils/functions'

const ArtistDetailsMobile = () => {
  const selectedArtist = useAppSelector(state => state.artistsReducer.artist)
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  // const filteredEvents = filterFutureEvents(selectedArtist?.events, 3)
  const description =
    currentLanguage === 'EN' ? selectedArtist?.description_en : selectedArtist?.description_es
  const formattedDescription = truncateText(formatDescription(description), 70)

  const socialLinks = [
    { type: 'PRESS KIT', url: selectedArtist?.press_kit || 'N/A' },
    { type: 'ARTWORK REQ.', url: selectedArtist?.artwork || 'N/A' },
    { type: 'Facebook', url: selectedArtist?.facebook || 'N/A' },
    { type: 'Twitter', url: selectedArtist?.twitter || 'N/A' },
    { type: 'Instagram', url: selectedArtist?.instagram || 'N/A' },
    { type: 'Soundcloud', url: selectedArtist?.SoundCloud || 'N/A' },
    { type: 'Spotify', url: selectedArtist?.spotify || 'N/A' },
    { type: 'Beatport', url: selectedArtist?.beatport || 'N/A' }
  ]

  return (
    <div className='relative pt-6'>
      <ArtistImage
        profilePic={`${ulrBack}${selectedArtist?.image?.url ?? ''}`}
        altText='Artist Name'
      />
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
      <Divider className='my-5' />
      <ArtistSocialLinks links={socialLinks} customClassName='optional-styles' gap={14} />
      <ArtistInfo shortInfo={formattedDescription} />
      <div className='flex items-center mt-0.5 md:mt-2'>
        <Link href={`artists/${selectedArtist?.id}`}>
          <TitleSmall text={`MORE`} className='mt-1 uppercase md:opacity-80 big:text-[14px]' />
        </Link>
        <TextIcon
          icon={TextIcons.RIGHT_ARROW}
          size={SizeIcons.TITLE_SMALL}
          className='self-center opacity-40 ml-0.5 md:purple-app md:opacity-100 big:text-[14px]'
        />
      </div>
      <Divider className='my-3' />
    </div>
  )
}

export default ArtistDetailsMobile
