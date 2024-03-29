'use client'
import React, { useState } from 'react'
import TitleSmall from '../texts/TitleSmall'
import Link from 'next/link'
import { itemsForNavbar } from 'src/utils/consts'
import { TextColors } from 'src/utils/Colors'
import TitleSection from '../texts/TitleSection'
import TextIcon, { SizeIcons, TextIcons } from '../icons/TextIcon'
import { TextTags } from '../texts/TextBase'
import logo from '../../../assets/general/logo.png'
import { signOutUser } from 'src/proxy/FirebaseAuth'

interface Props {
  position?: string
  dark?: boolean
}

const Navbar: React.FC<Props> = ({ position = 'top', dark = false }) => {
  const [open, setOpen] = useState(false)
  const [load, setLoad] = useState(false)

  const signOut = async () => {
    setLoad(true)
    await signOutUser()
    setLoad(false)
  }

  return (
    <nav
      className={`flex items-center justify-between ${
        position === 'bottom' ? 'fixed desk:absolute bottom-0' : 'fixed desk:absolute top-0'
      } w-full bg-yellow-app desk:backdrop-blur-sm ${
        dark ? 'desk:bg-black/40' : 'desk:bg-white/10'
      }  py-7 z-20 h-20 desk:h-16 big:h-24`}
      // style={{ height: '72px' }}
    >
      <div
        className='md:bg-yellow-lime-app p-2 w-16 h-16 desk:w-16 desk:h-16 big:w-24 big:h-24 flex justify-center items-center'
        // style={{ height: '72px' }}
      >
        <Link href='/' className='pointer relative'>
          <img src={logo.src} alt='logo' className=' w-full h-full p-1' />
          <div className='w-full h-full top-0 left-0 absolute cursor'></div>
        </Link>
      </div>
      <div className='hidden md:flex items-center space-x-8 big:space-x-12 pr-7'>
        {itemsForNavbar.map(item => (
          <Link key={item.key} href={item.to}>
            <TitleSmall
              text={item.name.ES}
              className='cursor cursor-pointer big:text-[16px]'
              color={TextColors.white}
            />
          </Link>
        ))}
        <button onClick={signOut} className='pt-[0.3rem] cursor-pointer'>
          <TitleSmall
            text={load ? 'Saliendo...' : 'Cerrar Sesión'}
            color={TextColors.white}
            className='cursor big:text-[16px] uppercase'
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
              text={item.name.ES}
              className='pointer my-4'
              color={TextColors.black}
              tag={TextTags.SPAN}
            />
          </Link>
        ))}
        <button onClick={signOut} className='my-4 cursor-pointer'>
          <TitleSection
            text={load ? 'Saliendo...' : 'Cerrar Sesión'}
            color={TextColors.black}
            className='cursor-pointer uppercase'
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
