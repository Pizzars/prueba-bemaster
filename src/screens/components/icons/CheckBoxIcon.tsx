import React from 'react'
import { ColorExtensions, TextColors } from 'src/utils/Colors'
import TextParagraph from '../texts/TextParagraph'
import { Fonts } from '../texts/TextBase'

interface Params {
  color?: ColorExtensions
  size?: string
  checked: boolean
}

const CheckBoxIcon = ({ color = ColorExtensions.BLUE, size = '20px', checked }: Params) => {
  const bg = checked ? `bg${color}` : 'bg-transparent'
  const border = `border${color}`
  const sizeClass = `w-[${size}] h-[${size}]`
  return (
    <div
      className={`${sizeClass} ${bg} ${border} border cursor-pointer flex justify-center items-center`}
    >
      {checked && (
        <TextParagraph text='✓' className='font-bold' font={Fonts.inter} color={TextColors.white} />
      )}
    </div>
  )
}

export default CheckBoxIcon
