'use client'
import React from 'react';
import LogoIcon from '../icons/LogoIcon';
import TitleSmall from '../texts/TitleSmall';
import Link from 'next/link';
import { itemsForNavbar } from 'src/utils/consts';
import { TextColors } from 'src/utils/Colors';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between fixed top-0 w-full bg-yellow-lime-app md:bg-black py-7 z-10 h-20" style={{ height: '72px' }}>
            <div className="md:bg-yellow-lime-app p-6" style={{ height: '72px'}}>
                <Link href="/">
                    <LogoIcon />
                </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4 pr-7">
                {itemsForNavbar.map(item => (
                    <Link key={item.key} href={item.to}>
                        <TitleSmall text={item.name.EN} className="cursor-pointer big:text-[14px]" color={TextColors.white}   />
                    </Link>
                ))}
                <button onClick={() => console.log('Language switch clicked!')} className="py-2 cursor-pointer">
                    <TitleSmall text={`EN`} color={TextColors.white} className="cursor-pointer big:text-[14px]"/>
                </button>
            </div>
            <button onClick={() => console.log('Menu clicked!')} className="px-5 py-2 cursor-pointer sm:flex md:hidden pr-7">
                <TitleSmall text={`MENU`} />
            </button>
        </nav>
    );
};

export default Navbar;
