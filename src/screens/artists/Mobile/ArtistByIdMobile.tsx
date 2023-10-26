import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import profilePic from './artist.jpg'
import profilePic2 from './artist2.jpeg'
import ArtistDates from '../Components/ArtistDates';
import ArtistSocialLinks from '../Components/ArtistSocialLinks';
import ArtistInfo from '../Components/ArtistInfo';
import ArtistImageCarousel from '../Components/ArtistImageCarousel';
import SwipeForMore from 'src/screens/components/general/SwipeForMore';

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

const largeInfo = `Brisotti began his career as a DJ in 2018, but it was in 2021, with the release by Solid Grooves, the label of British artists Michael 
Bibi and Pawsa, that his name established itself as a major breakthrough.
 The artist has ac hieved numerous accomplishments, with support from Jamie Jones, 
 Michael Bibi, Chris Lake, Clonee, Loco Dice, and reaching 7-digit streams with the track "Tripasia" on streaming platforms.
 Additionally, he has been making appear ances at the biggest events and festivals in the country.
 \nHailing from the interior of São Paulo, Brisotti possesses technique, charisma, and stage presence as his trademarks, which make him acclaimed by the crowds he commands, under a strong influence of House Music and its subgenres.`


const ArtistByIdMobile = () => {
    return (
        <div className="relative">
            <ArtistImageCarousel
                profilePics={[profilePic, profilePic2, profilePic]}
                altText="Artist Name"
            />
            <div className='px-8'>
                {[1, 2, 3].map(number => (
                    <ArtistDates
                        key={number}
                        date="31·07·23"
                        venue="Social Club Mallorca"
                        location="Palma, España"
                    />
                ))}
                <Divider className='my-5' />
                <ArtistSocialLinks links={socialLinks} />
                <ArtistInfo
                    longInfo={largeInfo}
                />
            </div>
            <SwipeForMore />
        </div >
    );
};

export default ArtistByIdMobile;
