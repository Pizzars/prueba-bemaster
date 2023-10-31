'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import TitleMedium from '../../texts/TitleMedium';
import { TextColors } from 'src/utils/Colors';
import TitleSection from '../../texts/TitleSection';
import styles from './Filter.module.css';

interface FilterProps {
    title: string;
    options: Array<{ title: string; option: string }>;
    className?: string;
}

const Filter: React.FC<FilterProps> = ({ title, options, className }) => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [activeTab, setActiveTab] = useState<string>(options?.[0]?.option || 'WORLDWIDE');
    const navRef = useRef<HTMLDivElement>(null);

    const fade = useSpring({
        opacity: scrollY > 50 ? 0 : 1,
    });

    const shrink = useSpring({
        marginTop: scrollY > 50 ? '-30px' : '0px',
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

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        if (navRef.current) {
            const activeElement = navRef.current.querySelector(`[data-tab="${tab}"]`);
            if (activeElement) {
                navRef.current.scroll({
                    left: (activeElement as HTMLElement).offsetLeft - 30,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className={`fixed w-full ${className} bg-gradient-to-r from-green-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pl-8 z-10 py-8`}>
            <animated.div style={shrink}>
                <animated.div style={fade}>
                    <TitleSection text={title} color={TextColors.white} className='uppercase' />
                </animated.div>
                <div ref={navRef} className={`pt-6 pb-2 flex overflow-x-auto whitespace-nowrap ${styles.scrollDiv}`}>
                    {options?.map(({ title, option }) => (
                        <div
                            key={option}
                            data-tab={option}
                            onClick={() => handleTabClick(option)}
                            className={`p-2 mr-2 cursor-pointer ${activeTab === option ? 'border-b-2 border-white' : ''}`}
                            style={{ opacity: activeTab === option ? 1 : 0.2 }}
                        >
                            <TitleMedium text={title} color={TextColors.white} className='text-[24px] uppercase desk:text-[24px]' />
                        </div>
                    ))}
                </div>
            </animated.div>
        </div>
    );
};

export default Filter;
