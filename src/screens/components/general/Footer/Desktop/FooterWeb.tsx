'use client'
import React from 'react';
import FooterBottom from './FooterBottom';
import FooterHeader from './FooterHeader';
import FooterCenter from './FooterCenter';
import FooterHome from './FooterHome';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname()

    return (
        <div className="flex flex-col w-full backdrop-blur-sm">
            <div className="flex flex-col w-full p-12">
                {pathname === '/' && <FooterHome />}
                <FooterHeader />
                <FooterCenter />
                <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;
