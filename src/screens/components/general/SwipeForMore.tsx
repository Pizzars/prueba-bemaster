'use client'
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TitleSmall from '../texts/TitleSmall';

const SwipeForMore: React.FC = () => {
    const [hide, setHide] = useState(false);

    const props = useSpring({
        transform: hide ? 'translateY(100%)' : 'translateY(1%)',
        opacity: hide ? 0 : 1,
        config: { duration: 300 }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setHide(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <animated.div
            style={{
                ...props,
                backgroundColor: '#D2FF37',
                height: 72,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                bottom: 0,
                zIndex: 1000
            }}
        >
            <TitleSmall text='SWIPE FOR MORE ARTISTS' />
        </animated.div>
    );
};

export default SwipeForMore;
