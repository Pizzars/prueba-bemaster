import React from 'react';
import TextParagraph from '../../components/texts/TextParagraph';
import TitleMedium from '../../components/texts/TitleMedium';
import TitleSmall from '../../components/texts/TitleSmall';
import TitleSection from 'src/screens/components/texts/TitleSection';
import TitleSmaller from 'src/screens/components/texts/TitleSmaller';
import TextSmall from 'src/screens/components/texts/TextSmall';
import { TextColors } from 'src/utils/Colors';
import TextBase from 'src/screens/components/texts/TextBase';

interface ArtistDatesProps {
    date: string;
    venue: string;
    location: string;
    customClassName?: string;
    index?: number;
}

const ArtistDates: React.FC<ArtistDatesProps> = ({
    date,
    venue,
    location,
    customClassName,
    index
}) => {
    return (
        <section className={`flex flex-col ${index !== 0 && 'mt-5'} ${customClassName}`}>
            <div className='flex flex-col'>
                <TitleMedium text={date} className='uppercase text-[22px] desk:text-[24px] desk:leading-[26px]' />
                <TitleSmaller text={venue} className='uppercase mt-1 text-[14px] desk:text-[15px] desk:leading-[17px]' />
                <TextSmall text={location} color={TextColors.black} className='helvetica mt-1 text-[14px] opacity-40 desk:text-[15px] desk:leading-[17px]' />
            </div>
        </section>
    );
};

export default ArtistDates;

