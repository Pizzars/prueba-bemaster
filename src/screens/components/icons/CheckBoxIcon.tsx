import React from 'react'
import { ColorExtensions, TextColors } from 'src/utils/Colors'
import TextParagraph from '../texts/TextParagraph'
import { Fonts } from '../texts/TextBase'

interface Params {
  color?: ColorExtensions
  className?: string
  size?: string
  checked: boolean
}

const CheckBoxIcon = ({
  color = ColorExtensions.BLUE,
  size = '20px',
  checked,
  className = ''
}: Params) => {
  const bg = checked ? `bg${color}` : 'bg-transparent'
  const border = `border${color}`
  const sizeClass = `min-w-[${size}] w-[${size}] min-h-[${size}] h-[${size}]`
  return (
    <div
      className={`${sizeClass} ${bg} ${border} border cursor-pointer flex justify-center items-center ${className}`}
    >
      {checked && (
        <TextParagraph text='✓' className='font-bold' font={Fonts.inter} color={TextColors.white} />
      )}
    </div>
  )
}

export default CheckBoxIcon
