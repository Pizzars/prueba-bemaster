'use client'
import React from 'react';
import LogoIcon from '../icons/LogoIcon';
import TitleSmall from '../texts/TitleSmall';
import Link from 'next/link';
import { itemsForNavbar } from 'src/utils/consts';
import { TextColors } from 'src/utils/Colors';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { setLanguage } from 'src/redux/features/languageSlice';


interface Props {
  position?: string
}

const Navbar: React.FC<Props> = ({ position = 'top' }) => {
    const currentLanguage = useAppSelector((state) => state.languageReducer.language);
    const dispatch = useAppDispatch()
    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'EN' ? 'ES' : 'EN';
        dispatch(setLanguage(newLanguage));
    };
    return (
        <nav
        className={`flex items-center justify-between ${
          position === 'bottom' ? 'absolute bottom-0' : 'fixed top-0'
        } w-full bg-yellow-app desk:backdrop-blur-sm desk:bg-white/10 py-7 z-10 h-20`}
        style={{ height: '72px' }}
      >            <div className="md:bg-yellow-lime-app p-6" style={{ height: '72px' }}>
            <Link href="/" className='pointer'>
                    <LogoIcon />
                </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4 pr-7">
                {itemsForNavbar.map(item => (
                    <Link key={item.key} href={item.to}>
                        <TitleSmall text={item.name[currentLanguage]} className="pointer big:text-[14px]" color={TextColors.white} />
                    </Link>
                ))}
                <button onClick={() => toggleLanguage()} className="py-2 cursor-pointer">
                    <TitleSmall text={`EN`} color={TextColors.white} className="cursor-pointer big:text-[14px]" />
                </button>
            </div>
            <button onClick={() => console.log('Menu clicked!')} className="px-5 py-2 cursor-pointer sm:flex md:hidden pr-7">
                <TitleSmall text={`MENU`} />
            </button>
        </nav>
    );
};

export default Navbar
