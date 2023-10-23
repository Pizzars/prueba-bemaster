import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import profilePic from './artist.jpg'
import ArtistDates from '../../ArtistDates';
import ArtistSocialLinks from '../../ArtistSocialLinks';
import ArtistImage from '../../ArtistImage';
import ArtistInfo from '../../ArtistInfo';

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


const ArtistDetailsMobile = () => {
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
            <ArtistSocialLinks links={socialLinks} customClassName="optional-styles" />
            <ArtistInfo
                shortInfo="Mejor DJ de House de Brasil."
            />
            <Divider className='my-5' />
        </div >
    );
};

export default ArtistDetailsMobile;
