'use client'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TitleMedium from '../components/texts/TitleMedium';
import { TextColors } from 'src/utils/Colors';
import TitleSection from '../components/texts/TitleSection';

const Filter = () => {
    const [scrollY, setScrollY] = useState(0);

    const fade = useSpring({
        opacity: scrollY > 50 ? 0 : 1,
    });

    const shrink = useSpring({
        marginTop: scrollY > 50 ? '-60px' : '0px',
    });

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed w-full bg-gradient-to-r from-green-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pl-8 z-10' style={{  }}>
            <animated.div style={shrink} className='py-8'>
                <animated.div style={fade}>
                    <TitleSection text={`ARTISTS`} color={TextColors.white} />
                </animated.div>
                <div className='pt-6 pb-2'>
                    <TitleMedium text={`WORLDWIDE`} color={TextColors.white} />
                </div>
            </animated.div>
        </div>
    );
};

export default Filter;
