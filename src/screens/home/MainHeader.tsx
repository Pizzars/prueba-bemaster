import React from 'react';
import Slider from "react-slick";
import { TextColors } from 'src/utils/Colors';
import TextIcon, { TextIcons } from '../components/icons/TextIcon';
import TitleHome from '../components/texts/TitleHome';
import TitleSmall from '../components/texts/TitleSmall';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/general/Navbar';

const MainHeader: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    return (
<header className="h-screen bg-red-500 desk:bg-blue-app flex flex-col justify-between relative">
            <div className='h-full pl-10 pt-48 desk:pl-20 desk:pt-24'>
                <div className="mt-auto mb-auto">
                    <TitleSmall text='b4bookings' className='text-white' />
                    <TitleHome text='BE FOR' className='text-white' />
                    <TitleHome text='THE' className='text-white ml-8' />

                    <div className="topbar_text_slider ml-4">
                        <Slider {...settings}>
                            <div><TitleHome text='BOOKING' className='text-white' /></div>
                            <div><TitleHome text='MUSIC' className='text-white' /></div>
                        </Slider>
                    </div>
                </div>


            </div>
            <div className='desk:hidden pl-10'>
                <Link href="/artists" className="flex flex-row items-center self-start mb-4">
                    <TextIcon icon={TextIcons.DOWN_TRIANGLE} color={TextColors.white} />
                    <TitleSmall text={`Artists`} color={TextColors.white} className='ml-1' />
                </Link>
            </div>

            <div className='hidden desk:block absolute bottom-0 w-full'>
                <Navbar position="bottom" />
            </div>
        </header>
    );
};

export default MainHeader;
