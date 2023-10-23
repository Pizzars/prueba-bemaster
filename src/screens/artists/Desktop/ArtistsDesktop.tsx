
import ArtistImageCarousel from '../ArtistImageCarousel';
import profilePic from '../ArtistById/artist.jpg'
import profilePic2 from '../ArtistById/artist2.jpeg'
import ArtistList from './ArtistList/ArtistsList';
import ArtistDetails from './ArtistsDetails';

const ArtistsDesktop: React.FC = () => {
    return (
        <div className='flex w-full'>
            <div className='flex h-screen w-full bg-black-app'>
                <ArtistList />
                <ArtistImageCarousel profilePics={[profilePic, profilePic2, profilePic]} customClassname={"flex-3 h-screen"} desktop/>
                <ArtistDetails />
            </div>
        </div>
    );
};

export default ArtistsDesktop;
