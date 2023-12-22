import React from 'react'
import { useAppSelector } from 'src/redux/hooks'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import { TextColors } from 'src/utils/Colors'
import { footerButtonsInfo } from 'src/utils/consts'

const FooterBottom = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  return (
    <section className='flex py-4 justify-between items-center mt-60'>
      <div className='flex flex-row'>
        {footerButtonsInfo.map(button => (
          <div key={button.key} className='mr-4 flex items-center'>
            <a href={button.to} id={button.key} className=' w-[170px] flex items-center customLink'>
              <TextParagraph
                text={button.name[currentLanguage]}
                color={TextColors.white}
                className='desk:text-[14px] textBesideIcon cursor'
              />
              <TextIcon
                icon={TextIcons.RIGHT_ARROW}
                size={SizeIcons.TEXT_PARAGRAPH}
                color={TextColors.white}
                className='ml-2 desk:text-[14px] cursor'
              />
            </a>
          </div>
        ))}
        <TextParagraph
          text={`© 2023 B4BOOKINGS, ALL RIGHTS RESERVED`}
          color={TextColors.white}
          className='ml-4 desk:text-[14px]'
        />
      </div>

      <a
        href={'https://www.promokore.com'}
        target='_blank'
        rel='noopener noreferrer'
        className='flex'
      >
        <TextParagraph
          text={'WEBSITE BY PROMOKORE'}
          color={TextColors.white}
          className='desk:text-[14px] cursor'
        />
        <TextIcon
          icon={TextIcons.DIAGONAL_ARROW}
          size={SizeIcons.TEXT_PARAGRAPH}
          color={TextColors.white}
          className='ml-1 desk:text-[18px] desk:leading-[21.6px] cursor'
        />
      </a>
    </section>
  )
}

export default FooterBottom
