import React from 'react';
import TextParagraph from '../../components/texts/TextParagraph';
import TitleMedium from '../../components/texts/TitleMedium';
import TitleSmall from '../../components/texts/TitleSmall';
import TitleSection from 'src/screens/components/texts/TitleSection';
import TitleSmaller from 'src/screens/components/texts/TitleSmaller';
import TextSmall from 'src/screens/components/texts/TextSmall';
import { TextColors } from 'src/utils/Colors';

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
                <TitleSmall text={date} className='uppercase' />
                <TitleSmall text={venue} className='uppercase mt-1' />
                <TextSmall text={location} color={TextColors.black} className='uppercase mt-1 opacity-40' />
            </div>
        </section>
    );
};

export default ArtistDates;

