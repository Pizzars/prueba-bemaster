import Link from 'next/link'
import React from 'react'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
import { itemsForNavbar, socialMediaLinks } from 'src/utils/consts'

const FooterCenter = () => {
    return (
        <section className='flex w-full justify-between bg-zinc-800 items-start p-10'>
                <div className='flex flex-col'>
                    {itemsForNavbar.map(item => (
                        <Link key={item.key} href={item.to} className='inline-flex items-center'>

                            <TitleSmall text={item.name['EN']} color={TextColors.white} />
                            <TextIcon
                                icon={TextIcons.RIGHT_ARROW}
                                size={SizeIcons.TEXT_SMALL}
                                className='ml-2 self-center'
                                color={TextColors.white}
                            />
                        </Link>

                    ))}
                    <button className='flex items-center'>

                        <TitleSmall text={'ESPAÑOL'} color={TextColors.white} />
                        <TextIcon
                            icon={TextIcons.RIGHT_ARROW}
                            size={SizeIcons.TEXT_SMALL}
                            className='ml-2 self-center'
                            color={TextColors.white}
                        />
                    </button>

                </div>
            <div className='flex flex-col '>
                {socialMediaLinks.map(social => (
                    <div className='inline-flex justify-end' key={social.name}>
                        <a
                            href={social.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex'
                        >
                            <TitleSmall text={social.name} color={TextColors.white} />
                            <TextIcon
                                icon={TextIcons.DIAGONAL_ARROW}
                                size={SizeIcons.TITLE_MEDIUM}
                                className='ml-2 self-center'
                                color={TextColors.white}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FooterCenter