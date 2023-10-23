import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import ArtistDates from '../ArtistDates';
import ArtistInfo from '../ArtistInfo';
import ArtistSocialLinks from '../ArtistSocialLinks';
import TitleHome from 'src/screens/components/texts/TitleHome';
import TitleMedium from 'src/screens/components/texts/TitleMedium';
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon';
import { TextColors } from 'src/utils/Colors';
import TextParagraph from 'src/screens/components/texts/TextParagraph';

const socialLinks = [
    { type: 'PRESS KIT', url: 'https://www.presskit.to/artist' },
    { type: 'ARTWORK REQ.', url: 'https://www.artwork-req.com/artist' },
    { type: 'Facebook', url: 'https://www.facebook.com/artist' },
    { type: 'Twitter', url: 'https://www.twitter.com/artist' },
    { type: 'Instagram', url: 'https://www.instagram.com/artist' },
    { type: 'Soundcloud', url: 'https://www.soundcloud.com/artist' },
    { type: 'Spotify', url: 'https://www.spotify.com/artist' },
    { type: 'Beatport', url: 'https://www.beatport.com/artist' }
];


const ArtistDetails = () => {
    return (
        <div className="flex flex-col justify-between h-screen bg-white" style={{
            flexBasis: "28.125%"
        }}>
            <div className='flex flex-col pl-8 pt-6'>
                <TitleHome text={`VIVIANA CASANOVA`} />
                <TextParagraph text={'WORLDWIDE'} className='uppercase mt-2 opacity-40' />
                <TextParagraph text={'EXCLUDING BRAZIL'} className='uppercase opacity-40' />
            </div>

            <Divider className='my-5' />
            <ArtistSocialLinks links={socialLinks} customClassName="pl-8" />

            <Divider className='mt-2' />
            <div className='pl-8'>
                {[1, 2, 3].map(number => (
                    <ArtistDates
                        key={number}
                        date="31·07·23"
                        venue="Social Club Mallorca"
                        location="Palma, España"
                    />
                ))}
            </div>
            <Divider className='my-5' />
            <div className='pl-8'>
                <ArtistInfo
                    shortInfo="Mejor DJ de House de Brasil."
                />
            </div>
            <div
                className='flex align-middle bg-yellow-app justify-between p-8'
                style={{
                    backgroundColor: '#D2FF37',
                }}
            >
                <TitleMedium text='BOOK ARTIST' />
                <TextIcon
                    icon={TextIcons.RIGHT_ARROW}
                    size={SizeIcons.TITLE_MEDIUM}
                    color={TextColors.black}
                    className='self-center'
                />
            </div>
        </div >
    );
};

export default ArtistDetails;
