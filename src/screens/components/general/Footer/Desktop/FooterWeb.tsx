import React from 'react';
import FooterBottom from './FooterBottom';
import FooterHeader from './FooterHeader';
import FooterCenter from './FooterCenter';

const Footer = () => {
    return (
        <div className="flex flex-col w-full bg-transparent">
            <div className="flex flex-col w-full p-12">
            <FooterHeader />
            <FooterCenter />
            <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;
