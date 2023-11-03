import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TitleSection from '../components/texts/TitleSection';
import { TextColors } from 'src/utils/Colors';
import './styles.css';
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon';
import Link from 'next/link';
import { useAppSelector } from 'src/redux/hooks';

const carouselTexts = ['WORLDWIDE', 'FOR EUROPE', 'FOR SPAIN', 'LATIN AMERICA', 'SPAIN & LATAM'];

const AnimatedText = () => {
    const [index, setIndex] = useState(0);
    const artists = useAppSelector(state => state.artistsReducer.data);

    const groupedArtists = [];
    if (!artists) return <></>   
    for (let i = 0; i < artists.length; i += 4) {
        groupedArtists.push(artists.slice(i, i + 4));
    }

    const props = useSpring({
        transform: `translateX(-${index * 100}%)`,
        from: { transform: `translateX(-${index * 100}%)` },
        config: { tension: 220, friction: 120 }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen bg-black overflow-hidden">
                   <div className="animated-text z-10">
            {groupedArtists.map((group, index) => (
                <TitleSection 
                    key={index} 
                    text={group.map(artist => artist.name.toUpperCase()).join('. ')} 
                    color={TextColors.gray} 
                    className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]' 
                />
            ))}
        </div>
        <div className="animated-text animated-text-delayed-1 z-10">
            {groupedArtists.map((group, index) => (
                <TitleSection 
                    key={index} 
                    text={group.map(artist => artist.name.toUpperCase()).join('. ')} 
                    color={TextColors.gray} 
                    className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]' 
                />
            ))}
        </div>
        <div className="animated-text animated-text-delayed-2 z-10">
            {groupedArtists.map((group, index) => (
                <TitleSection 
                    key={index} 
                    text={group.map(artist => artist.name.toUpperCase()).join('. ')} 
                    color={TextColors.gray} 
                    className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]' 
                />
            ))}
        </div>
        <div className="animated-text animated-text-delayed-3 z-10">
            {groupedArtists.map((group, index) => (
                <TitleSection 
                    key={index} 
                    text={group.map(artist => artist.name.toUpperCase()).join('. ')} 
                    color={TextColors.gray} 
                    className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]' 
                />
            ))}
        </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20" />
            <div className="absolute bottom-0 z-30 text-white pl-4">
                <Link href="/artists" className='flex flex-row'>
                    <TitleSection text={`ARTISTS`} color={TextColors.white} />
                    <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.white} />
                </Link>
                <div className="overflow-hidden" style={{ width: '100%' }}>
                    <animated.div style={props} className="flex transition-all duration-500">
                        {carouselTexts.map((text, i) => (
                            <div key={i} className="flex-shrink-0" style={{ whiteSpace: 'nowrap', minWidth: '100%' }}>
                                <TitleSection text={text} color={TextColors.white} />
                            </div>
                        ))}
                    </animated.div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedText;
