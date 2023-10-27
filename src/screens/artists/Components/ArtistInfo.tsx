import React from 'react';
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons, SizeIcons } from '../../components/icons/TextIcon';
import TextParagraph from '../../components/texts/TextParagraph';
import TitleSmall from '../../components/texts/TitleSmall';
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
                <TextParagraph text={longInfo} className='mt-1 big:text-[14px]' />
            ) : (
                <>
                    <TextParagraph text={shortInfo || ''} className=' opacity-40 md:opacity-100 big:text-[14px] big:leading-[15.4px]' />
                    <div className='flex items-center mt-0.5 md:mt-2'>
                        <Link href={'artists/2'}>
                            <TitleSmall text={`VIEW MORE`} className='uppercase md:opacity-80 big:text-[14px]' />
                        </Link>
                        <TextIcon
                            icon={TextIcons.RIGHT_ARROW}
                            size={SizeIcons.TITLE_SMALL}
                            className='self-center opacity-40 ml-0.5 md:purple-app md:opacity-100 big:text-[14px]'
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default ArtistInfo;
