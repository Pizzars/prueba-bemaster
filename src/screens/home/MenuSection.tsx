import React from 'react'
import { TextColors } from 'src/utils/Colors'
import { menuItemsForHome } from 'src/utils/consts'
import TextIcon, { TextIcons, SizeIcons } from '../components/icons/TextIcon'
import TitleSection from '../components/texts/TitleSection'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { setLanguage } from 'src/redux/features/languageSlice'

const MenuSection = () => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const dispatch = useAppDispatch()

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'EN' ? 'ES' : 'EN'
    dispatch(setLanguage(newLanguage))
  }

  return (
    <div style={{ background: '#D2FF37' }} className='desk:hidden flex w-full items-center pl-4'>
      <div className='my-8 flex w-full flex-col items-start space-y-8'>
        {menuItemsForHome.map(item => (
          <Link href={item.to} key={item.key}>
            <div className='flex'>
              <TitleSection text={item.name[currentLanguage]} color={TextColors.black} />
              <TextIcon
                icon={TextIcons.RIGHT_ARROW}
                size={SizeIcons.TITLE}
                color={TextColors.black}
              />
            </div>
          </Link>
        ))}
        <button onClick={toggleLanguage} className='self-end mr-8' style={{ marginTop: '6rem' }}>
          <TitleSection text={currentLanguage} color={TextColors.black} />
        </button>
      </div>
    </div>
  )
}

export default MenuSection
