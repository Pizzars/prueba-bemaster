import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { TextColors } from 'src/utils/Colors'
import TextIcon, { TextIcons, SizeIcons } from '../../components/icons/TextIcon'
import TitleSmall from '../../components/texts/TitleSmall'

interface ArtistImageProps {
  profilePic: string | StaticImageData
  altText?: string
  customClassName?: string
}

const ArtistImage: React.FC<ArtistImageProps> = ({
  profilePic,
  altText = 'Artist',
  customClassName
}) => {
  return (
    <>
      <div className={`relative h-[325px] w-full ${customClassName}`}>
        <img
          src={typeof profilePic === 'string' ? profilePic : profilePic.src}
          alt={altText}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            backgroundColor: '#00E482',
            opacity: 0.4,
            mixBlendMode: 'multiply'
          }}
          className='absolute inset-0'
        ></div>
      </div>
      <div className='flex justify-between items-center bg-[#222222] text-white px-7 py-5'>
        <TitleSmall text={`Book Artist`} color={TextColors.white} className='uppercase' />
        <TextIcon
          icon={TextIcons.RIGHT_ARROW}
          size={SizeIcons.TITLE_SMALL}
          color={TextColors.white}
        />
      </div>
    </>
  )
}

export default ArtistImage
