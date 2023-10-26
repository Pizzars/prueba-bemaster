import React from 'react';
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons, SizeIcons } from '../../components/icons/TextIcon';
import TitleSmall from '../../components/texts/TitleSmall';

interface ArtistSocialLink {
    type: string;
    url: string;
}

interface ArtistSocialLinksProps {
    links: ArtistSocialLink[];
    customClassName?: string;
    column?: boolean;
}

const ArtistSocialLinks: React.FC<ArtistSocialLinksProps> = ({ links, customClassName, column }) => {
    return (
        <div className={`flex flex-wrap ${customClassName} ${column ? 'flex-col' : ''}`}>
            {links.map((link, index) => (
                <div key={index} className='w-1/2 flex mb-3'>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className='uppercase flex'>
                        <TitleSmall text={link.type} />
                        <TextIcon
                            icon={TextIcons.DIAGONAL_ARROW}
                            size={SizeIcons.TITLE_MEDIUM}
                            color={TextColors.blue}
                            className='self-center ml-1'
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ArtistSocialLinks;
