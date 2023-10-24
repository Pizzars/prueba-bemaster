import React from 'react';
import TextParagraph from '../../components/texts/TextParagraph';
import TitleMedium from '../../components/texts/TitleMedium';
import TitleSmall from '../../components/texts/TitleSmall';

interface ArtistDatesProps {
    date: string;
    venue: string;
    location: string;
    customClassName?: string;
}

const ArtistDates: React.FC<ArtistDatesProps> = ({
    date,
    venue,
    location,
    customClassName,
}) => {
    return (
        <section className={`flex flex-col mt-5 ${customClassName}`}>
            <div className='flex flex-col'>
                <TitleMedium text={date} className='uppercase' />
                <TitleSmall text={venue} className='uppercase mt-1' />
                <TextParagraph text={location} className='uppercase mt-1 opacity-40' />
            </div>
        </section>
    );
};

export default ArtistDates;

