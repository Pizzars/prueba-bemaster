import React from 'react';
import TextParagraph from '../../components/texts/TextParagraph';

interface ArtistInfoProps {
    shortInfo?: string;
    longInfo?: string;
    customClassName?: string;
}

const ArtistInfo: React.FC<ArtistInfoProps> = ({ shortInfo, longInfo, customClassName }) => {

    if (!shortInfo && !longInfo) return null;

    return (
        <div className={`flex flex-col ${customClassName}`}>
            {longInfo ? (
                <TextParagraph text={longInfo} className='mt-1 big:text-[14px]' />
            ) : (
                <>
                    <TextParagraph text={shortInfo || ''} className='helvetica opacity-40 md:opacity-100 big:text-[14px] big:leading-[15.4px]' />
                </>
            )}
        </div>
    );
};

export default ArtistInfo;
