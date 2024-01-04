'use client'
import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from '../texts/TextBase'
import TitleHome from '../texts/TitleHome'
import TitleSection from '../texts/TitleSection'
import TitleMedium from '../texts/TitleMedium'
import TitleSmall from '../texts/TitleSmall'
import TextParagraph from '../texts/TextParagraph'
import TextSmall from '../texts/TextSmall'
import { useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Right from './arrows/Right'
import Diagonal from './arrows/Diagonal'
import { TextIcons } from './TextIcon'

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
  cursor?: boolean
}

const ArrowIcon = ({
  icon,
  color = TextColors.blue,
  size = SizeIcons.TEXT_PARAGRAPH,
  className,
  cursor = true
}: Params) => {
  const [isHovered, setIsHovered] = useState(false)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  const props = useSpring({
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    config: { duration: 300 }
  })

  const ref = useRef<null | HTMLDivElement>(null)

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
    // set({ x: e.clientX - left - width, y: e.clientY - top - height })
  }

  const getIconSvg = () => {
    if (icon === TextIcons.RIGHT_ARROW) {
      return <Right />
    }
    if (icon === TextIcons.DIAGONAL_ARROW) {
      return <Diagonal />
    }
  }
  const Icon = ({ className = 'w-4 h-4 translate-y-[0.15rem]' }: { className?: string }) => {
    const baseStiles = 'flex justify-center items-center'

    if (icon === TextIcons.RIGHT_ARROW) {
      return <div className={`${baseStiles} ml-1 ${className}`}>{getIconSvg()}</div>
    }
    if (icon === TextIcons.DIAGONAL_ARROW) {
      return <div className={`${baseStiles} ml-2 pt-1 ${className}`}>{getIconSvg()}</div>
    }
    return <></>
  }

  const getView = () => {
    return <Icon />
    // switch (size) {
    //   case SizeIcons.TITLE_HOME: {
    //     return <TitleHome tag={TextTags.SPAN} text={getIcon()} color={color} font={Fonts.inter} />
    //   }
    //   case SizeIcons.TITLE: {
    //     return (
    //       <TitleSection
    //         tag={TextTags.SPAN}
    //         text={getIcon()}
    //         color={color}
    //         font={Fonts.inter}
    //         className={`${className} font-bold`}
    //       />
    //     )
    //   }
    //   case SizeIcons.TITLE_MEDIUM: {
    //     return (
    //       <TitleMedium
    //         tag={TextTags.SPAN}
    //         text={getIcon()}
    //         color={color}
    //         font={Fonts.inter}
    //         className={`${className} font-bold`}
    //       />
    //     )
    //   }
    //   case SizeIcons.TITLE_SMALL: {
    //     return (
    //       <TitleSmall
    //         tag={TextTags.SPAN}
    //         text={getIcon()}
    //         color={color}
    //         font={Fonts.inter}
    //         className={`${className} font-bold`}
    //       />
    //     )
    //   }
    //   case SizeIcons.TEXT_PARAGRAPH: {
    //     return (
    //       <TextParagraph
    //         tag={TextTags.SPAN}
    //         text={getIcon()}
    //         color={color}
    //         font={Fonts.inter}
    //         className={`${className} font-bold`}
    //       />
    //     )
    //   }
    //   case SizeIcons.TEXT_SMALL: {
    //     return (
    //       <TextSmall
    //         tag={TextTags.SPAN}
    //         text={getIcon()}
    //         color={color}
    //         font={Fonts.inter}
    //         className={`${className} font-bold`}
    //       />
    //     )
    //   }
    //   default: {
    //     return (
    //       <TextBase
    //         text={getIcon()}
    //         className={`text-[14px] inter font-bold ${color} ${className}`}
    //       />
    //     )
    //   }
    // }
  }

  return (
    <div
      className={`inline-block ${cursor ? 'cursor' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      <animated.div className={`inline-block ${cursor ? 'cursor' : ''}`} style={props}>
        {getView()}
      </animated.div>
    </div>
  )
}

export default ArrowIcon
