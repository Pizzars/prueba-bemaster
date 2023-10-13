'use client';
import React, { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon';
import TitleSmall from '../components/texts/TitleSmall';
import { TextColors } from 'src/utils/Colors';
import TitleMedium from '../components/texts/TitleMedium';
import TextParagraph from '../components/texts/TextParagraph';

interface ArtistImageCarouselProps {
    profilePics: (string | StaticImageData)[];
    altText?: string;
    customClassName?: string;
}

const ArtistImageCarousel: React.FC<ArtistImageCarouselProps> = ({
    profilePics,
    altText = 'Artist',
    customClassName,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const start = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        start.current = e.touches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const end = e.touches[0].clientX;
        const distance = start.current - end;

        if (distance > 50) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % profilePics.length);
        } else if (distance < -50) {
            setActiveIndex((prevIndex) => (prevIndex - 1 + profilePics.length) % profilePics.length);
        }
    };

    const onClick = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const { left, width } = container.getBoundingClientRect();

        if (e.clientX - left < width / 2) {
            setActiveIndex((prevIndex) => (prevIndex - 1 + profilePics.length) % profilePics.length);
        } else {
            setActiveIndex((prevIndex) => (prevIndex + 1) % profilePics.length);
        }
    };

    const progressStyle = {
        width: `${(100 / profilePics.length)}%`,
        left: `${(100 / profilePics.length) * activeIndex}%`,
        opacity: profilePics.length > 1 ? 1 : 0,
        transition: 'left 0.3s ease-in-out',
        top: '-2px',
    };

    return (
        <div className={customClassName} ref={containerRef} onClick={onClick}>
            <div className="relative h-[410px]" onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
                {profilePics.map((pic, index) => (
                    <div
                        key={index}
                        className="absolute inset-0"
                        style={{ display: index === activeIndex ? 'block' : 'none' }}
                    >
                        <Image
                            src={typeof pic === 'string' ? pic : pic.src}
                            alt={altText}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div
                            style={{
                                backgroundColor: '#00E482',
                                opacity: 0.4,
                                mixBlendMode: 'multiply',
                            }}
                            className="absolute inset-0"
                        ></div>
                        <div className="absolute bottom-8 left-8">
                            <TitleMedium text={`Brisotti`} className='uppercase' color={TextColors.white} />
                            <TextParagraph text={`WORLDWIDE`} className='uppercase' color={TextColors.white} />
                            <TextParagraph text={`EXCLUDING BRAZIL`} className='uppercase mt-0 pt-0' color={TextColors.white} />
                        </div>
                    </div>
                ))}
                <div className="absolute top-8 left-8 right-8 border-t-2 border-opacity-30 border-white">
                    <div className="border-t-2 border-white absolute" style={progressStyle}></div>
                </div>
            </div>

            <div className="flex justify-between items-center bg-[#222222] text-white px-7 py-5">
                <TitleSmall text={`Book Artist`} color={TextColors.white} className="uppercase" />
                <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE_SMALL} color={TextColors.white} />
            </div>
        </div>
    );
};

export default ArtistImageCarousel;
