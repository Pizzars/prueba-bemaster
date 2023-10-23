
import Filter from '../components/general/Filter/Filter';
import GigsList from './GigsList';

const optionPlaceholders = [
  { title: 'AUG\nWEEK1', option: 'WEEK1' },
  { title: 'AUG\nWEEK2', option: 'WEEK2' },
  { title: 'AUG\nWEEK3', option: 'WEEK3' },
  { title: 'AUG\nWEEK4', option: 'WEEK4' },
];


const Gigs: React.FC = () => {
  return (
    <div className='flex w-full mb-4'>
      <Filter title='Gigs' options={optionPlaceholders} className='py-6' />
      <GigsList />
    </div>
  );
};

export default Gigs;
