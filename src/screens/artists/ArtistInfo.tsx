import React from 'react';
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons, SizeIcons } from '../components/icons/TextIcon';
import TextParagraph from '../components/texts/TextParagraph';
import TitleSmall from '../components/texts/TitleSmall';
import Link from 'next/link';

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
                <TextParagraph text={longInfo} className='mt-1' />
            ) : (
                <>
                    <TextParagraph text={shortInfo || ''} className='mt-1 opacity-40' />
                    <div className='flex items-center mt-0.5'>
                        <Link href={'artists/2'}>
                            <TitleSmall text={`MORE`} className='uppercase' />
                        </Link>
                        <TextIcon
                            icon={TextIcons.RIGHT_ARROW}
                            size={SizeIcons.TITLE_MEDIUM}
                            color={TextColors.black}
                            className='self-center opacity-40 ml-0.5'
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ArtistInfo;
