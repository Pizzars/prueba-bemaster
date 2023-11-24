'use client'
import React from 'react'
import { TextColors } from 'src/utils/Colors'
import { socialMediaLinks } from 'src/utils/consts'
import LogoIcon from '../icons/LogoIcon'
import TextIcon, { TextIcons, SizeIcons } from '../icons/TextIcon'
import TitleSmall from '../texts/TitleSmall'

const SocialMediaLinks = () => {
  return (
    <div className='flex w-full bg-white items-center pl-8 z-50'>
      <div className='my-8 flex flex-column w-full flex-col items-start'>
        <div className='mb-8'>
          <LogoIcon size='22' />
        </div>
        <div className='mb-8'>
          <TitleSmall text={`BE FOR THE MUSIC.`} />
          <TitleSmall text={`BE FOR THE BOOKING.`} />
        </div>
        <div className='flex flex-col space-y-4'>
          {socialMediaLinks.map(social => (
            <div className='inline-flex' key={social.name}>
              <a
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center'
              >
                <TitleSmall text={social.name} color={TextColors.black} />
                <TextIcon
                  icon={TextIcons.DIAGONAL_ARROW}
                  size={SizeIcons.TITLE_MEDIUM}
                  className='mb-0 ml-1 mt-1 mobile:text-[18px] mobile:leading-[19.8px]'
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialMediaLinks
