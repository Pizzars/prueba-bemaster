import React from 'react';
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons, SizeIcons } from '../../components/icons/TextIcon';
import TitleSmall from '../../components/texts/TitleSmall';
import TextParagraph from 'src/screens/components/texts/TextParagraph';

interface ArtistSocialLink {
    type: string;
    url: string;
}

interface ArtistSocialLinksProps {
    links: ArtistSocialLink[];
    customClassName?: string;
    column?: boolean;
    gap?: number;
}

const ArtistSocialLinks: React.FC<ArtistSocialLinksProps> = ({ links, customClassName, column, gap = 2 }) => {
    const marginBottomStyle = { marginBottom: `${gap}px` };

    return (
        <div className={`flex flex-wrap ${customClassName} ${column ? 'flex-col' : ''}`}>
            {links.map((link, index) => (
                <div key={index} className='w-1/2 flex' style={marginBottomStyle}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className='uppercase flex'>
                        <TitleSmall text={link.type} className='desk:text-[14px] align-middle' />
                        <TextIcon
                            icon={TextIcons.DIAGONAL_ARROW}
                            size={SizeIcons.TITLE_SMALL}
                            color={TextColors.blue}
                            className='self-center ml-1 text-[10px] desk:text-[20px]'
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ArtistSocialLinks;