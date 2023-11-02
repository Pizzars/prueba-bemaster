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
import { useAppSelector } from 'src/redux/hooks';


const largeInfo = `Brisotti began his career as a DJ in 2018, but it was in 2021, with the release by Solid Grooves, the label of British artists Michael 
Bibi and Pawsa, that his name established itself as a major breakthrough.
 The artist has ac hieved numerous accomplishments, with support from Jamie Jones, 
 Michael Bibi, Chris Lake, Clonee, Loco Dice, and reaching 7-digit streams with the track "Tripasia" on streaming platforms.
 Additionally, he has been making appear ances at the biggest events and festivals in the country.
 \nHailing from the interior of São Paulo, Brisotti possesses technique, charisma, and stage presence as his trademarks, which make him acclaimed by the crowds he commands, under a strong influence of House Music and its subgenres.`


const ArtistByIdDesktop = () => {

    const artist = useAppSelector(state => state.artistsReducer.artistById);
    const socialLinks = [
        { type: 'PRESS KIT', url: artist?.press_kit || 'N/A' },
        { type: 'ARTWORK REQ.', url: artist?.artwork || 'N/A' },
        { type: 'Facebook', url: artist?.facebook || 'https://www.facebook.com/' },
        { type: 'Twitter', url: artist?.twitter || 'https://www.twitter.com/' },
        { type: 'Instagram', url: artist?.instagram || 'https://www.instagram.com/' },
        { type: 'Soundcloud', url: artist?.SoundCloud || 'https://www.soundcloud.com/' },
        { type: 'Spotify', url: artist?.spotify || 'https://www.spotify.com/' },
        { type: 'Beatport', url: artist?.beatport || 'https://www.beatport.com/' }
    ];

    const formattedDescription = artist?.description_en?.replace(/<\/p><p>&nbsp;<\/p><p>/g, '\n\n')
        .replace(/<p>|<\/p>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&ntilde;/g, 'ñ')
        .replace(/&aacute;/g, 'á')
        .replace(/&eacute;/g, 'é')
        .replace(/&iacute;/g, 'í')
        .replace(/&oacute;/g, 'ó')
        .replace(/&uacute;/g, 'ú');

    if (!artist) return null;

    return (
        <div className="relative flex px-10 py-14 w-full">
            {/* Flecha izquierda */}
            <button className="absolute top-1/4 left-8 transform -translate-y-1/2 text-4xl"
                onClick={() => console.log('4')}>
                <TextIcon icon={TextIcons.LEFT_ARROW} size={SizeIcons.TITLE_MEDIUM} className='desk:text-[24px] desk:leading-[24px]' />
            </button>

            <div className="w-[70%] flex flex-col ml-8 mr-10">
                <div className='flex flex-col'>
                    <TitleHome text={`${artist?.name?.replace(' ', '\n')}`} className='desk:text-[48px] desk:leading-[44px]' />
                    <TextParagraph text={`${artist?.territory?.data?.attributes.Territory}`} className='uppercase mt-2 opacity-40 desk:text-[24px] desk:leading-[24px]' />
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
                                customClassName='mt-6'
                            />
                        ))}
                        <ArtistInfo
                            longInfo={formattedDescription}
                            customClassName='mt-5'
                        />
                    </div>
                </div>
            </div>

            <div className='w-[30%] mr-8'>
                <ArtistImageCarousel
                    profilePics={[profilePic, profilePic2, profilePic]}
                    altText="Artist Name"
                    byId
                />
            </div>

            {/* Flecha derecha */}
            <button className="absolute top-1/4 right-8 transform -translate-y-1/2 text-4xl"
                onClick={() => console.log('4')}>
                <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE_MEDIUM} className='desk:text-[24px] desk:leading-[24px]' />
            </button>
        </div>
    );
};
export default ArtistByIdDesktop;
