
'use client'
import { useAppSelector } from 'src/redux/hooks';
import ArtistImageCarousel from '../Components/ArtistImageCarousel';
import profilePic from '../Mobile/artist.jpg'
import profilePic2 from '../Mobile/artist2.jpeg'
import ArtistList from './ArtistList/ArtistsList';
import ArtistDetails from './ArtistsDetails';
import { ulrBack } from 'src/utils/consts';

const ArtistsDesktop: React.FC = () => {
    const selectedArtist = useAppSelector(state => state.artistsReducer.artist);
    console.log(`${ulrBack}${selectedArtist?.image?.url}`, 'photo')
    console.log(`selectedArtist`, selectedArtist)
    return (
        <div className='flex w-full'>
            <div className='flex h-screen w-full bg-black-app'>
                <ArtistList />
                {
                    selectedArtist && <>
                        <ArtistImageCarousel profilePics={[`${ulrBack}${selectedArtist.image?.url ?? ''}`]}
                            customClassname={"flex-3 h-screen"} desktop />
                        <ArtistDetails />
                    </>
                }
            </div>
        </div>
    );
};

export default ArtistsDesktop;
