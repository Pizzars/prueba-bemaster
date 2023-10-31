import React from 'react'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import { TextColors } from 'src/utils/Colors'
import { footerButtonsInfo } from 'src/utils/consts'

const FooterBottom = () => {
    return (
        <section className='flex bg-transparent py-4 justify-between items-center mt-60'>
            <div className='flex flex-row'>
                {footerButtonsInfo.map(button => (
                    <div key={button.key} className='mr-4 flex items-center'>
                        <a href={button.to} id={button.key} className='flex items-center'>
                            <TextParagraph text={button.name['EN']} color={TextColors.white} className='desk:text-[14px]'/>
                            <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TEXT_PARAGRAPH} color={TextColors.white} className='ml-2 desk:text-[14px]' />
                        </a>
                    </div>
                ))}
                <TextParagraph text={`© 2023 B4BOOKINGS, ALL RIGHTS RESERVED`} color={TextColors.white} className='ml-4 desk:text-[14px]' />
            </div>

            <a href={'https://www.promokore.com'} target="_blank" rel="noopener noreferrer" className='flex'>
                <TextParagraph text={"WEBSITE BY PROMOKORE"} color={TextColors.white} className='desk:text-[14px]'/>
                <TextIcon icon={TextIcons.DIAGONAL_ARROW} size={SizeIcons.TEXT_PARAGRAPH} color={TextColors.white} className='ml-2 desk:text-[14px]' />
            </a>
        </section>
    )
}

export default FooterBottom