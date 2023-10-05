import React from 'react';
import { TextColors } from 'src/utils/Colors';
import { footerButtonsInfo } from 'src/utils/consts';
import TextIcon, { TextIcons, SizeIcons } from '../icons/TextIcon';
import TextParagraph from '../texts/TextParagraph';

const Footer = () => {
    return (
        <div className="flex flex-col bg-black-app w-full py-6 px-12">
            <div className='flex flex-row'>
                {footerButtonsInfo.map(button => (
                    <div key={button.key} className='mr-4 flex items-center'>
                        <a href={button.to} id={button.key} className='flex items-center'>
                            <TextParagraph text={button.name['EN']} color={TextColors.white} className='opacity-40' />
                            <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TEXT_PARAGRAPH} color={TextColors.white} className='opacity-40' />
                        </a>
                    </div>
                ))}
            </div>
            <TextParagraph text={`© 2023 B4BOOKINGS`} color={TextColors.white} className='opacity-40' />
            <TextParagraph text={`ALL RIGHTS RESERVED`} color={TextColors.white} className='opacity-40' />
            <a href={'https://www.promokore.com'} target="_blank" rel="noopener noreferrer" className='flex items-center content-center'>
                <TextParagraph text={"WEBSITE BY PROMOKORE"} color={TextColors.white} className='opacity-40' />
                <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TEXT_PARAGRAPH} color={TextColors.white} className='opacity-40' />
            </a>
        </div>
    );
};

export default Footer;
