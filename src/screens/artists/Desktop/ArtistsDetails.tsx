import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import ArtistDates from '../Components/ArtistDates';
import ArtistInfo from '../Components/ArtistInfo';
import ArtistSocialLinks from '../Components/ArtistSocialLinks';
import TitleMedium from 'src/screens/components/texts/TitleMedium';
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon';
import { TextColors } from 'src/utils/Colors';
import TextParagraph from 'src/screens/components/texts/TextParagraph';
import TitleSmall from 'src/screens/components/texts/TitleSmall';
import { useAppSelector } from 'src/redux/hooks';
import Link from 'next/link';


const ArtistDetails = () => {
    const selectedArtist = useAppSelector(state => state.artistsReducer.artist);

    const socialLinks = [
        { type: 'PRESS KIT', url: selectedArtist?.press_kit || 'N/A' },
        { type: 'ARTWORK REQ.', url: selectedArtist?.artwork || 'N/A' },
        { type: 'Facebook', url: selectedArtist?.facebook || 'https://www.facebook.com/' },
        { type: 'Twitter', url: selectedArtist?.twitter || 'https://www.twitter.com/' },
        { type: 'Instagram', url: selectedArtist?.instagram || 'https://www.instagram.com/' },
        { type: 'Soundcloud', url: selectedArtist?.SoundCloud || 'https://www.soundcloud.com/' },
        { type: 'Spotify', url: selectedArtist?.spotify || 'https://www.spotify.com/' },
        { type: 'Beatport', url: selectedArtist?.beatport || 'https://www.beatport.com/' }
    ];

    return (
        <div className="flex flex-col justify-between h-screen bg-white" style={{
            flexBasis: "28.125%"
        }}>
            <div className='flex flex-col pl-8 pt-6'>
                <TitleMedium text={selectedArtist?.name || 'N/A'} />
                <TextParagraph text={'WORLDWIDE EXCLUDING BRAZIL'} className='uppercase mt-2 opacity-40 big:text-[14px]' />
            </div>

            <Divider className='my-5' />
            <ArtistSocialLinks links={socialLinks} customClassName="pl-8" />

            <Divider className='mt-2' />
            <div className='pl-8'>
                {[1, 2].map((number, index) => (
                    <ArtistDates
                        key={number}
                        date="31·07·23"
                        venue="Neopop festival"
                        location="Viana Do Castelo, Portugal"
                        index={index}
                    />
                ))}
            </div>
            <Divider className='my-3' />
            <div className='pl-8'>
                <ArtistInfo
                    shortInfo={selectedArtist?.info || 'N/A'}
                />
                <div className='flex items-center mt-0.5 md:mt-2'>
                    <Link href={`artists/${selectedArtist?.id}`}>
                        <TitleSmall text={`VIEW MORE`} className='uppercase md:opacity-80 big:text-[14px]' />
                    </Link>
                    <TextIcon
                        icon={TextIcons.RIGHT_ARROW}
                        size={SizeIcons.TITLE_SMALL}
                        className='self-center opacity-40 ml-0.5 md:purple-app md:opacity-100 big:text-[14px]'
                    />
                </div>
            </div>
            <div
                className='flex align-middle bg-yellow-app justify-between p-8'
                style={{
                    backgroundColor: '#D2FF37',
                }}
            >
                <TitleSmall text='BOOK ARTIST' />
                <TextIcon
                    icon={TextIcons.RIGHT_ARROW}
                    size={SizeIcons.TITLE_SMALL}
                    color={TextColors.black}
                    className='self-center'
                />
            </div>
        </div >
    );
};

export default ArtistDetails;
