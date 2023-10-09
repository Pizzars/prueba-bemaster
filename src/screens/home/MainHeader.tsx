import React from 'react';
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons } from '../components/icons/TextIcon';
import TitleHome from '../components/texts/TitleHome';
import TitleSmall from '../components/texts/TitleSmall';


const MainHeader: React.FC = () => {
    return (
        <header className="h-screen bg-red-500 flex flex-col justify-between pl-10">
            <div className="mt-auto mb-auto">
                <TitleSmall text='b4bookings' className='text-white' />
                <TitleHome text='BE FOR' className='text-white' />
                <TitleHome text='THE' className='text-white ml-8' />
                <TitleHome text='BOOKING' className='text-white ml-3' />
            </div>

            <div className="flex flex-row items-center self-start mb-4">
                <TextIcon icon={TextIcons.DOWN_TRIANGLE} color={TextColors.white} />
                <TitleSmall text={`Artists`} color={TextColors.white} className='ml-1' />
            </div>
        </header>
    );
};

export default MainHeader;
