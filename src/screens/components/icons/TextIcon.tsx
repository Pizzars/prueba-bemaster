'use client'
import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from '../texts/TextBase'
import TitleHome from '../texts/TitleHome'
import TitleSection from '../texts/TitleSection'
import TitleMedium from '../texts/TitleMedium'
import TitleSmall from '../texts/TitleSmall'
import TextParagraph from '../texts/TextParagraph'
import TextSmall from '../texts/TextSmall'
import CalendarIcon from './CalendarIcon'
import CheckBoxIcon from './CheckBoxIcon'
import { useRef, useState } from 'react'

export enum TextIcons {
  DIAGONAL_ARROW = '↗',
  LEFT_ARROW = '←',
  RIGHT_ARROW = '→',
  DOWN_ARROW = '↓',
  DOWN_TRIANGLE = '▽',
  CLOSE = '×',
  CALENDAR = 'CALENDAR',
  CHECK = 'CHECK',
  LOGO = 'LOGO'
}

export enum SizeIcons {
  TITLE_HOME,
  TITLE,
  TITLE_MEDIUM,
  TITLE_SMALL,
  TEXT_PARAGRAPH,
  TEXT_SMALL
}

interface Params {
  icon: TextIcons
  color?: TextColors
  size?: SizeIcons
  className?: string
  checked?: boolean
}

const TextIcon = ({
  icon,
  color = TextColors.blue,
  size = SizeIcons.TEXT_PARAGRAPH,
  className,
  checked = false
}: Params) => {
  if (icon === TextIcons.CALENDAR) {
    return <CalendarIcon />
  }
  if (icon === TextIcons.CHECK) {
    return <CheckBoxIcon checked={checked} className={className} />
  }

  const [isHovered, setIsHovered] = useState(false)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const ref = useRef<null | HTMLSpanElement>(null)

  const handleMouseEnter = (e: any) => {
    setIsHovered(true)
    updatePosition(e)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTranslate({ x: 0, y: 0 })
  }

  const handleMouseMove = (e: any) => {
    if (isHovered) {
      updatePosition(e)
    }
  }

  const updatePosition = (e: any) => {
    const container = ref.current
    if (!container) return
    const { top, left } = container.getBoundingClientRect()
    const width = container.offsetWidth / 2
    const height = container.offsetHeight / 2
    setTranslate({ x: e.clientX - left - width, y: e.clientY - top - height })
  }

  const getView = () => {
    switch (size) {
      case SizeIcons.TITLE_HOME: {
        return <TitleHome tag={TextTags.SPAN} text={icon} color={color} font={Fonts.inter} />
      }
      case SizeIcons.TITLE: {
        return (
          <TitleSection
            tag={TextTags.SPAN}
            text={icon}
            color={color}
            font={Fonts.inter}
            className={`${className} font-bold`}
          />
        )
      }
      case SizeIcons.TITLE_MEDIUM: {
        return (
          <TitleMedium
            tag={TextTags.SPAN}
            text={icon}
            color={color}
            font={Fonts.inter}
            className={`${className} font-bold`}
          />
        )
      }
      case SizeIcons.TITLE_SMALL: {
        return (
          <TitleSmall
            tag={TextTags.SPAN}
            text={icon}
            color={color}
            font={Fonts.inter}
            className={`${className} font-bold`}
          />
        )
      }
      case SizeIcons.TEXT_PARAGRAPH: {
        return (
          <TextParagraph
            tag={TextTags.SPAN}
            text={icon}
            color={color}
            font={Fonts.inter}
            className={`${className} font-bold`}
          />
        )
      }
      case SizeIcons.TEXT_SMALL: {
        return (
          <TextSmall
            tag={TextTags.SPAN}
            text={icon}
            color={color}
            font={Fonts.inter}
            className={`${className} font-bold`}
          />
        )
      }
      default: {
        return (
          <TextBase text={icon} className={`text-[14px] inter font-bold ${color} ${className}`} />
        )
      }
    }
  }

  return (
    <span
      className='inline-block'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      <span
        className='inline-block'
        style={{
          pointerEvents: 'none',
          transform: `translate(${translate.x}px, ${translate.y}px)`,
          transition: '0.3s all ease'
        }}
      >
        {getView()}
      </span>
    </span>
  )
}

export default TextIcon
