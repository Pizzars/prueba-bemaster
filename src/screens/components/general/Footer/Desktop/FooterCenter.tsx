import Link from 'next/link'
import React from 'react'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
import { itemsForNavbar, socialMediaLinks } from 'src/utils/consts'

const FooterCenter = () => {
  
  return (
    <section className='flex w-full justify-between backdrop-blur-sm bg-white/10 items-start p-10'>
      <div className='flex flex-col'>
        {itemsForNavbar.map(item => (
          <Link key={item.key} href={item.to} className='customLink'>
            <TitleSmall
              text={item.name.ES}
              color={TextColors.white}
              className='textBesideIcon desk:text-basic desk:leading-basic cursor'
            />
            <TextIcon
              icon={TextIcons.RIGHT_ARROW}
              size={SizeIcons.TEXT_SMALL}
              className=' self-center desk:text-basic desk:leading-basic big:text-basic big:leading-basic cursor'
              color={TextColors.white}
            />
          </Link>
        ))}
        <button className='flex items-center customLink'>
          <TitleSmall
            text={'ESPAÑOL'}
            color={TextColors.white}
            className='textBesideIcon desk:text-basic desk:leading-basic cursor'
          />
          <TextIcon
            icon={TextIcons.RIGHT_ARROW}
            size={SizeIcons.TEXT_SMALL}
            className=' self-center desk:text-basic desk:leading-basic big:text-basic big:leading-basic cursor'
            color={TextColors.white}
          />
        </button>
      </div>
      <div className='flex flex-col '>
        {socialMediaLinks.map(social => (
          <div className='inline-flex justify-end' key={social.name}>
            <a href={social.url} target='_blank' rel='noopener noreferrer' className='inline-flex'>
              <TitleSmall
                text={social.name}
                color={TextColors.white}
                className='textBesideIcon desk:text-basic desk:leading-basic cursor'
              />
              <TextIcon
                icon={TextIcons.DIAGONAL_ARROW}
                size={SizeIcons.TITLE_MEDIUM}
                className='ml-1 self-center desk:text-basic desk:leading-basic big:text-basic big:leading-basic cursor'
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
