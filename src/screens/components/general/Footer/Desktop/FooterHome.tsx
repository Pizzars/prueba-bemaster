import Link from 'next/link'
import React from 'react'
import { useAppSelector } from 'src/redux/hooks'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import TitleSection from 'src/screens/components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import { menuItemsForHome } from 'src/utils/consts'

const FooterHome = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)

  return (
    <section className='flex w-full justify-between backdrop-blur-sm bg-white/10 items-start p-10'>
      <div className='my-8 flex w-full flex-col items-start space-y-8'>
        {menuItemsForHome.map(item => (
          <Link href={item.to} key={item.key} className='customLink'>
            <div className='flex'>
              <TitleSection
                text={item.name[currentLanguage]}
                color={TextColors.white}
                className='textBesideIcon cursor'
              />
              <TextIcon
                icon={TextIcons.RIGHT_ARROW}
                size={SizeIcons.TITLE}
                color={TextColors.white}
                className='cursor'
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FooterHome
