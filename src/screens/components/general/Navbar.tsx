'use client'
import React, { useState } from 'react'
import LogoIcon from '../icons/LogoIcon'
import TitleSmall from '../texts/TitleSmall'
import Link from 'next/link'
import { itemsForNavbar } from 'src/utils/consts'
import { TextColors } from 'src/utils/Colors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { setLanguage } from 'src/redux/features/languageSlice'
import TitleSection from '../texts/TitleSection'
import TextIcon, { SizeIcons, TextIcons } from '../icons/TextIcon'
import { TextTags } from '../texts/TextBase'

interface Props {
  position?: string
}

const Navbar: React.FC<Props> = ({ position = 'top' }) => {
  const [open, setOpen] = useState(false)
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const dispatch = useAppDispatch()

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'EN' ? 'ES' : 'EN'
    dispatch(setLanguage(newLanguage))
  }

  return (
    <nav
      className={`flex items-center justify-between ${
        position === 'bottom' ? 'fixed desk:absolute bottom-0' : 'fixed desk:absolute top-0'
      } w-full bg-yellow-app desk:backdrop-blur-sm desk:bg-white/10 py-7 z-20 h-20 desk:h-16 big:h-24`}
      // style={{ height: '72px' }}
    >
      {' '}
      <div
        className='md:bg-yellow-lime-app p-4 desk:p-[1.2rem] big:p-8 w-16 h-16 desk:w-16 desk:h-16 big:w-24 big:h-24 flex justify-center items-center'
        // style={{ height: '72px' }}
      >
        <Link href='/' className='pointer relative'>
          <LogoIcon />
          <div className='w-full h-full top-0 left-0 absolute cursor'></div>
        </Link>
      </div>
      <div className='hidden md:flex items-center space-x-4 pr-7'>
        {itemsForNavbar.map(item => (
          <Link key={item.key} href={item.to}>
            <TitleSmall
              text={item.name[currentLanguage]}
              className='cursor cursor-pointer big:text-[14px]'
              color={TextColors.white}
            />
          </Link>
        ))}
        <button onClick={() => toggleLanguage()} className='py-2 cursor-pointer'>
          <TitleSmall
            text={currentLanguage}
            color={TextColors.white}
            className='cursor big:text-[14px]'
            tag={TextTags.SPAN}
          />
        </button>
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-yellow-app md:hidden transition delay-500 ${
          !open ? 'translate-x-[-100vw]' : 'translate-x-[0vw]'
        }`}
      >
        {itemsForNavbar.map(item => (
          <Link key={item.key} href={item.to}>
            <TitleSection
              text={item.name[currentLanguage]}
              className='pointer my-4'
              color={TextColors.black}
              tag={TextTags.SPAN}
            />
          </Link>
        ))}
        <button onClick={() => toggleLanguage()} className='my-4 cursor-pointer'>
          <TitleSection
            text={currentLanguage}
            color={TextColors.black}
            className='cursor-pointer'
          />
        </button>
        <button onClick={() => setOpen(false)} className='p-2 absolute top-2 right-2'>
          <TextIcon icon={TextIcons.CLOSE} color={TextColors.black} size={SizeIcons.TITLE} />
        </button>
      </div>
      <button
        onClick={() => setOpen(true)}
        className='px-5 py-2 cursor-pointer sm:flex md:hidden pr-7'
      >
        <TitleSmall text={`MENU`} />
      </button>
    </nav>
  )
}

export default Navbar
