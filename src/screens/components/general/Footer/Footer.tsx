import React from 'react';
import FooterMobile from './Mobile/FooterMobile';
import FooterWeb from './Desktop/FooterWeb';

const Footer = () => {
    return (
        <div className="w-full">
            <div className="sm:block md:hidden">
                <FooterMobile />
            </div>
            <div className=" hidden md:block">
                <FooterWeb />
            </div>
        </div>
    );
};

export default Footer;
