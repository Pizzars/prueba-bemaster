'use client'

import React from 'react';
import LogoIcon from '../icons/LogoIcon';
import TitleSmall from '../texts/TitleSmall';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between fixed top-0 w-full bg-yellow-lime-app p-7" style={{ height: '72px', zIndex: 1000 }}>
            <div onClick={() => console.log('Icon clicked!')} className="cursor-pointer">
                <LogoIcon />
            </div>
            <button onClick={() => console.log('Menu clicked!')} className="px-5 py-2 cursor-pointer">
                <TitleSmall text={`MENU`} />
            </button>
        </nav>
    );
};

export default Navbar;
