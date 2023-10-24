'use client'
import React from 'react';
import Divider from 'src/screens/components/general/Divider';
import profilePic from '../Mobile/artist.jpg'
import profilePic2 from '../Mobile/artist2.jpeg'
import ArtistDates from '../Components/ArtistDates';
import ArtistSocialLinks from '../Components/ArtistSocialLinks';
import ArtistInfo from '../Components/ArtistInfo';
import ArtistImageCarousel from '../Components/ArtistImageCarousel';
import TextParagraph from 'src/screens/components/texts/TextParagraph';
import TitleHome from 'src/screens/components/texts/TitleHome';
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon';
import { TextColors } from 'src/utils/Colors';

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


const ArtistByIdDesktop = () => {
    return (
        <div className="relative flex px-10 py-14 w-full">
            {/* Flecha izquierda */}
            <button className="absolute top-1/3 left-8 transform -translate-y-1/2 text-4xl"
                onClick={() => console.log('4')}>
                <TextIcon icon={TextIcons.LEFT_ARROW} size={SizeIcons.TITLE_MEDIUM} />
            </button>

            <div className="w-3/5 flex flex-col ml-8 mr-10">
                <div className='flex flex-col'>
                    <TitleHome text={`VIVIANA\n CASANOVA`} />
                    <TextParagraph text={'WORLDWIDE'} className='uppercase mt-2 opacity-40' />
                    <TextParagraph text={'EXCLUDING BRAZIL'} className='uppercase opacity-40' />
                </div>
                <Divider />

                <div className="w-full flex mt-4 ">
                    <div className='w-1/3'>
                        <ArtistSocialLinks links={socialLinks} column />
                    </div>

                    <div className='w-2/3 px-10'>
                        {[1, 2, 3].map(number => (
                            <ArtistDates
                                key={number}
                                date="31·07·23"
                                venue="Social Club Mallorca"
                                location="Palma, España"
                                customClassName='mt-0'
                            />
                        ))}
                        <ArtistInfo
                            longInfo={largeInfo}
                            customClassName='mt-5'
                        />
                    </div>
                </div>
            </div>

            <div className='w-2/5 mr-8'>
                <ArtistImageCarousel
                    profilePics={[profilePic, profilePic2, profilePic]}
                    altText="Artist Name"
                />
            </div>

            {/* Flecha derecha */}
            <button className="absolute top-1/3 right-8 transform -translate-y-1/2 text-4xl"
                onClick={() => console.log('4')}>
                <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE_MEDIUM} />

            </button>
        </div>
    );
};
export default ArtistByIdDesktop;
