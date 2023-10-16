import ArtistsList from './ArtistsList';
import Filter from '../components/general/Filter/Filter';

const optionPlaceholders = [
  { title: 'WORLDWIDE', option: 'worldwide' },
  { title: 'IN EUROPE', option: 'europe' },
  { title: 'IN LATINAMERICA', option: 'latinamerica' },
  { title: 'IN ASIA', option: 'asia' },
];


const Artists: React.FC = () => {
  return (
    <div className='flex w-full mb-4'>
      <Filter title='Artists' options={optionPlaceholders}/>
      <ArtistsList />
    </div>
  );
};

export default Artists;
