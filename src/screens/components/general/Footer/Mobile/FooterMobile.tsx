import React from 'react'
import { TextColors } from 'src/utils/Colors'
import { footerButtonsInfo } from 'src/utils/consts'
import TextIcon, { TextIcons, SizeIcons } from '../../../icons/TextIcon'
import TextParagraph from '../../../texts/TextParagraph'
import SocialMediaLinks from '../../SocialMediaLinks'

const Footer = () => {
  return (
    <div className='flex flex-col w-full'>
      <SocialMediaLinks />
      <div className='flex flex-col bg-black-app py-4 px-4 z-50'>
        <div className='flex flex-row '>
          {footerButtonsInfo.map(button => (
            <div key={button.key} className='mr-4 flex items-center'>
              <a href={button.to} id={button.key} className='flex items-center'>
                <TextParagraph
                  text={button.name['EN']}
                  color={TextColors.white}
                  className='opacity-40 '
                />
                <TextIcon
                  icon={TextIcons.RIGHT_ARROW}
                  size={SizeIcons.TEXT_PARAGRAPH}
                  color={TextColors.white}
                  className='opacity-40 ml-1 mb-1'
                />
              </a>
            </div>
          ))}
        </div>
        <TextParagraph
          text={`© 2023 B4BOOKINGS`}
          color={TextColors.white}
          className='opacity-40 '
        />
        <TextParagraph
          text={`ALL RIGHTS RESERVED`}
          color={TextColors.white}
          className='opacity-40 '
        />
        <a
          href={'https://www.promokore.com'}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <TextParagraph
            text={'WEBSITE BY PROMOKORE'}
            color={TextColors.white}
            className='opacity-40 '
          />
          <TextIcon
            icon={TextIcons.DIAGONAL_ARROW}
            size={SizeIcons.TEXT_PARAGRAPH}
            color={TextColors.white}
            className='opacity-40 ml-1 mb-1'
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
