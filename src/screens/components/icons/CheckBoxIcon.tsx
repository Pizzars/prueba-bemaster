import React from 'react'
import { ColorExtensions, TextColors } from 'src/utils/Colors'
import TextParagraph from '../texts/TextParagraph'
import { Fonts } from '../texts/TextBase'

interface Params {
  color?: ColorExtensions
  className?: string
  checked: boolean
}

const CheckBoxIcon = ({ color = ColorExtensions.BLUE, checked, className = '' }: Params) => {
  const bg = checked ? `bg${color} border${color}` : `bg-transparent  border${color}`
  const border = `border${color}`
  const sizeClass = `min-w-[20px] w-[20px] min-h-[20px] h-[20px]`
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
