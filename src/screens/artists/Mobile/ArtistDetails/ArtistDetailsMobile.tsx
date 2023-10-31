import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import profilePic from './artist.jpg'
import ArtistDates from '../../Components/ArtistDates';
import ArtistSocialLinks from '../../Components/ArtistSocialLinks';
import ArtistImage from '../../Components/ArtistImage';
import ArtistInfo from '../../Components/ArtistInfo';
import Link from 'next/link';
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon';
import TitleSmall from 'src/screens/components/texts/TitleSmall';
import { useAppSelector } from 'src/redux/hooks';

const ArtistDetailsMobile = () => {
    const selectedArtist = useAppSelector(state => state.artistsReducer.artist);

    const socialLinks = [
        { type: 'PRESS KIT', url: selectedArtist?.press_kit || 'N/A' },
        { type: 'ARTWORK REQ.', url: selectedArtist?.artwork || 'N/A' },
        { type: 'Facebook', url: selectedArtist?.facebook || 'N/A' },
        { type: 'Twitter', url: selectedArtist?.twitter || 'N/A' },
        { type: 'Instagram', url: selectedArtist?.instagram || 'N/A' },
        { type: 'Soundcloud', url: selectedArtist?.SoundCloud || 'N/A' },
        { type: 'Spotify', url: selectedArtist?.spotify || 'N/A' },
        { type: 'Beatport', url: selectedArtist?.beatport || 'N/A' }
    ];

    return (
        <div className="relative py-8">
            <ArtistImage
                profilePic={profilePic}
                altText="Artist Name"
            />
            {[1, 2, 3].map(number => (
                <ArtistDates
                    key={number}
                    date="31·07·23"
                    venue="Social Club Mallorca"
                    location="Palma, España"
                />
            ))}
            <Divider className='my-5' />
            <ArtistSocialLinks links={socialLinks} customClassName="optional-styles" gap={14} />
            <ArtistInfo
                shortInfo="Mejor DJ de House de Brasil."
            />
            <div className='flex items-center mt-0.5 md:mt-2'>
                <Link href={`artists/${selectedArtist?.id}`}>
                    <TitleSmall text={`MORE`} className='uppercase md:opacity-80 big:text-[14px]' />
                </Link>
                <TextIcon
                    icon={TextIcons.RIGHT_ARROW}
                    size={SizeIcons.TITLE_SMALL}
                    className='self-center opacity-40 ml-0.5 md:purple-app md:opacity-100 big:text-[14px]'
                />
            </div>
            <Divider className='my-5' />
        </div >
    );
};

export default ArtistDetailsMobile;
