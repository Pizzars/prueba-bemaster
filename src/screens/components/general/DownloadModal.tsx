'use client'
import React, { useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TextIcon, { TextIcons, SizeIcons } from '../icons/TextIcon'
import TitleSmall from '../texts/TitleSmall'
import TextParagraph from '../texts/TextParagraph'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  downloadUrl: string
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, downloadUrl }) => {
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDownload = () => {
    if (typeof window !== 'undefined') {
      if (password === 'bforbooking2023') {
        window.location.href = downloadUrl
      } else {
        setErrorMessage('Incorrect password')
        setTimeout(() => setErrorMessage(''), 1000)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg flex justify-center items-center z-50'>
      <div className='bg-white relative min-w-[320px]'>
        <button onClick={onClose} className='absolute top-5 right-8'>
          <TextParagraph
            text={`x`}
            color={TextColors.white}
            className='inter font-thin text-[#4466DD]'
          />
        </button>
        <div className='pl-7 mt-24 mb-4'>
          <label className='helvetica block text-sm font-medium text-gray-700'>YOUR PASSWORD</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleDownload()}
            className='block w-full sm:text-sm border-none focus:border-none focus:outline-none'
            style={{ WebkitTextSecurity: 'square' } as any}
          />
          {errorMessage && <div className='text-red-500 text-sm mt-2'>{errorMessage}</div>}
        </div>
        <button
          onClick={handleDownload}
          className='flex w-full justify-between items-center bg-[#222222] text-white px-7 py-5'
        >
          <TitleSmall text={`Download`} color={TextColors.white} className='uppercase' />
          <TextIcon
            icon={TextIcons.DOWN_ARROW}
            size={SizeIcons.TITLE_SMALL}
            color={TextColors.white}
          />
        </button>
      </div>
    </div>
  )
}

export default DownloadModal
