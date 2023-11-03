import React from 'react';
import FooterBottom from './FooterBottom';
import FooterHeader from './FooterHeader';
import FooterCenter from './FooterCenter';
import FooterHome from './FooterHome';

const Footer = () => {
    return (
        <div className="flex flex-col w-full backdrop-blur-sm">
            <div className="flex flex-col w-full p-12">
            <FooterHome />
            <FooterHeader />
            <FooterCenter />
            <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;
