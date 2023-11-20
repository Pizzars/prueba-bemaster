'use client'
import React, { useState, useRef } from 'react'
import { StaticImageData } from 'next/image'
import TextIcon, { SizeIcons, TextIcons } from '../../components/icons/TextIcon'
import TitleSmall from '../../components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
import TitleMedium from '../../components/texts/TitleMedium'
import TextParagraph from '../../components/texts/TextParagraph'

interface ArtistImageCarouselProps {
  profilePics: (string | StaticImageData)[]
  altText?: string
  customClassname?: string
  desktop?: boolean
  byId?: boolean
}

const ArtistImageCarousel: React.FC<ArtistImageCarouselProps> = ({
  profilePics,
  altText = 'Artist',
  customClassname,
  desktop,
  byId = false
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const start = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    start.current = e.touches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    const end = e.touches[0].clientX
    const distance = start.current - end

    if (distance > 50) {
      setActiveIndex(prevIndex => (prevIndex + 1) % profilePics.length)
    } else if (distance < -50) {
      setActiveIndex(prevIndex => (prevIndex - 1 + profilePics.length) % profilePics.length)
    }
  }

  const onClick = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return

    const { left, width } = container.getBoundingClientRect()

    if (e.clientX - left < width / 2) {
      setActiveIndex(prevIndex => (prevIndex - 1 + profilePics.length) % profilePics.length)
    } else {
      setActiveIndex(prevIndex => (prevIndex + 1) % profilePics.length)
    }
  }

  const progressStyle = {
    width: `${100 / profilePics.length}%`,
    left: `${(100 / profilePics.length) * activeIndex}%`,
    opacity: profilePics.length > 1 ? 1 : 0,
    transition: 'left 0.3s ease-in-out',
    top: '-2px'
  }

  return (
    <div
      className={`${customClassname} flex flex-col  md:h-screen ${
        byId && 'md:h-[550px]'
      } h-[435px]`}
      ref={containerRef}
      onClick={onClick}
    >
      <div className='relative flex-grow' onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
        {profilePics.map((pic, index) => (
          <div
            key={index}
            className='absolute inset-0'
            style={{ display: index === activeIndex ? 'block' : 'none' }}
          >
            <img
              src={typeof pic === 'string' ? pic : pic.src}
              alt={altText}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            <div
              // style={{
              // backgroundColor: '#00E482',
              //   opacity: 0.4,
              //   mixBlendMode: 'multiply',
              //  }}
              className='absolute inset-0'
            ></div>
            {!desktop && !byId && (
              <div className='absolute bottom-8 left-8'>
                <TitleMedium text={`${altText}`} className='uppercase' color={TextColors.white} />
                <TextParagraph text={`WORLDWIDE`} className='uppercase' color={TextColors.white} />
                <TextParagraph
                  text={`EXCLUDING BRAZIL`}
                  className='uppercase mt-0 pt-0'
                  color={TextColors.white}
                />
              </div>
            )}
          </div>
        ))}
        <div className='absolute top-8 left-8 right-8 border-t-2 border-opacity-30 border-white'>
          <div className='border-t-2 border-white absolute' style={progressStyle}></div>
        </div>
      </div>

      {!desktop && (
        <div
          className={`flex-shrink-0 flex justify-between items-center ${
            byId ? 'bg-yellow-app' : 'bg-[#222222]'
          } text-white px-7 py-5`}
        >
          <TitleSmall
            text={`Book Artist`}
            color={byId ? TextColors.black : TextColors.white}
            className='uppercase'
          />
          <TextIcon
            icon={TextIcons.RIGHT_ARROW}
            size={SizeIcons.TITLE_SMALL}
            color={byId ? TextColors.black : TextColors.white}
          />
        </div>
      )}
    </div>
  )
}

export default ArtistImageCarousel
