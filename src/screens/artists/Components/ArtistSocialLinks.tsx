'use client'
import React, { useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TextIcon, { TextIcons, SizeIcons } from '../../components/icons/TextIcon'
import TitleSmall from '../../components/texts/TitleSmall'
import DownloadModal from 'src/screens/components/general/DownloadModal'

interface ArtistSocialLink {
  type: string
  url: string
}

interface ArtistSocialLinksProps {
  links: ArtistSocialLink[]
  customClassName?: string
  column?: boolean
  gap?: number
}

const ArtistSocialLinks: React.FC<ArtistSocialLinksProps> = ({
  links,
  customClassName,
  column,
  gap = 2
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleLinkClick = (link: ArtistSocialLink) => {
    if (link.type === 'PRESS KIT' || link.type === 'ARTWORK REQ.') {
      setIsModalOpen(true)
      setDownloadUrl(link.url)
    } else {
      if (typeof window !== 'undefined') {
        window.open(link.url, '_blank')
      }
    }
  }

  const marginBottomStyle = { marginBottom: `${gap}px` }

  return (
    <div className={`flex flex-wrap ${customClassName} ${column ? 'flex-col' : ''}`}>
      {links.map((link, index) => (
        <div key={index} className='w-1/2 flex' style={marginBottomStyle}>
          {link.type === 'PRESS KIT' || link.type === 'ARTWORK REQ.' ? (
            <span onClick={() => handleLinkClick(link)} className='uppercase flex cursor-pointer'>
              <TitleSmall
                text={link.type}
                className='desk:text-[14px] align-middle cursor black-cursor dark-cursor'
              />
              <TextIcon
                icon={TextIcons.DIAGONAL_ARROW}
                size={SizeIcons.TITLE_SMALL}
                color={TextColors.blue}
                className='self-center ml-1 text-[10px] desk:text-[20px] cursor black-cursor dark-cursor'
              />
            </span>
          ) : (
            <a href={link.url} target='_blank' rel='noopener noreferrer' className='uppercase flex'>
              <TitleSmall
                text={link.type}
                className='desk:text-[14px] align-middle cursor black-cursor dark-cursor'
              />
              <TextIcon
                icon={TextIcons.DIAGONAL_ARROW}
                size={SizeIcons.TITLE_SMALL}
                color={TextColors.blue}
                className='self-center ml-1 text-[10px] desk:text-[20px] cursor black-cursor dark-cursor'
              />
            </a>
          )}
        </div>
      ))}
      {isModalOpen && (
        <DownloadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          downloadUrl={downloadUrl}
        />
      )}
    </div>
  )
}

export default ArtistSocialLinks
