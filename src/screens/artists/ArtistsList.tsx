'use client'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TextIcon, { TextIcons } from '../components/icons/TextIcon';
import TitleMedium from '../components/texts/TitleMedium';
import { artists } from '../home/AnimatedText';
import ArtistDetailsMobile from './ArtistDetails/ArtistDetailsMobile';

const ArtistsList: React.FC = () => {
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [nextArtist, setNextArtist] = useState<string | null>(null);

    const props = useSpring({
        height: open ? 900 : 0,
        opacity: open ? 1 : 0,
        onRest: () => {
            if (!open) {
                setSelectedArtist(nextArtist);
                setNextArtist(null);
            }
        },
        reset: true,
    });

    useEffect(() => {
        if (selectedArtist !== null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [selectedArtist]);

    const handleArtistClick = (artist: string) => {
        if (selectedArtist === artist) {
            setOpen(!open);
            setNextArtist(null);
        } else if (open) {
            setOpen(false);
            setNextArtist(artist);
        } else {
            setSelectedArtist(artist);
        }
    };

    return (
        <div className='flex flex-col w-full pl-8 pr-6 space-y-5' style={{ paddingTop: 200 }}>
            {artists.map(artist => (
                <div key={artist} className="flex flex-col">
                    <div
                        onClick={() => handleArtistClick(artist)}
                        className="flex flex-row justify-between items-center"
                    >
                        <TitleMedium text={artist} />
                        <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
                    </div>

                    {(selectedArtist === artist) && (
                        <animated.div style={props} className="overflow-hidden">
                            <ArtistDetailsMobile />
                        </animated.div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ArtistsList;
