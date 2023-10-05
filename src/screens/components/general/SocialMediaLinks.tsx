import React from 'react';
import { TextColors } from 'src/utils/Colors';
import { socialMediaLinks } from 'src/utils/consts';
import LogoIcon from '../icons/LogoIcon';
import TextIcon, { TextIcons, SizeIcons } from '../icons/TextIcon';
import TitleMedium from '../texts/TitleMedium';


const SocialMediaLinks = () => {
    return (
        <div className="flex w-full items-center pl-4">
            <div className='my-8 flex flex-column w-full flex-col items-start'>
                <div className='mb-8'>
                    <LogoIcon size="22" />
                </div>
                <div className='mb-8'>
                    <TitleMedium text={`BE FOR THE MUSIC.`} />
                    <TitleMedium text={`BE FOR THE BOOKING.`} />
                </div>
                <div className='space-y-8'>
                    {socialMediaLinks.map((social) => (
                        <div className='flex items-center' key={social.name}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                                <TitleMedium text={social.name} color={TextColors.black} />
                                <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TITLE_MEDIUM} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLinks;
