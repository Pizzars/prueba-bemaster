import ArtistsList from './ArtistsList';
import Filter from './Filter';

const Artists: React.FC = () => {
  return (
    <div className='flex w-full mb-4'>
      <Filter />
      <ArtistsList />
    </div>
  );
};

export default Artists;
