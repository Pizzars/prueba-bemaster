import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from '../texts/TextBase'
import TitleHome from '../texts/TitleHome'
import TitleSection from '../texts/TitleSection'
import TitleMedium from '../texts/TitleMedium'
import TitleSmall from '../texts/TitleSmall'
import TextParagraph from '../texts/TextParagraph'
import TextSmall from '../texts/TextSmall'
import TextIcon, { SizeIcons, TextIcons } from './TextIcon'

interface Params {
  text: string
  icon: TextIcons
  color?: TextColors
  iconColor?: TextColors
  size?: SizeIcons
  className?: string
  checked?: boolean
}

const TextWithIcon = ({
  icon,
  color = TextColors.black,
  iconColor = TextColors.blue,
  size = SizeIcons.TEXT_PARAGRAPH,
  className,
  text,
  checked = false
}: Params) => {
  const getIcon = () => {
    return (
      <TextIcon color={iconColor} size={size} icon={icon} className={className} checked={checked} />
    )
  }

  const value =
    icon === TextIcons.CHECK ? (
      <div className='flex items-center'>
        <div className='mr-4 mb-1'>{getIcon()}</div>
        {text}
      </div>
    ) : (
      <>
        {text}
        {getIcon()}
      </>
    )

  switch (size) {
    case SizeIcons.TITLE_HOME: {
      return <TitleHome tag={TextTags.SPAN} text={value} color={color} font={Fonts.inter} />
    }
    case SizeIcons.TITLE: {
      return (
        <TitleSection
          tag={TextTags.SPAN}
          text={value}
          color={color}
          font={Fonts.inter}
          className='font-bold'
        />
      )
    }
    case SizeIcons.TITLE_MEDIUM: {
      return (
        <TitleMedium
          tag={TextTags.SPAN}
          text={value}
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
          text={value}
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
          text={value}
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
          text={value}
          color={color}
          font={Fonts.inter}
          className={`${className} font-bold`}
        />
      )
    }
    default: {
      return (
        <TextBase text={value} className={`text-[14px] inter font-bold ${color} ${className}`} />
      )
    }
  }
}

export default TextWithIcon
