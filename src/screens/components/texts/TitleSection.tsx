import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TitleSection = ({
  text,
  tag = TextTags.H1,
  className = '',
  color = TextColors.black,
  font = Fonts.swis
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[38px] leading-[34.2px] desk:text-[48px] desk:leading-[48px] big:text-[90px] big:leading-[90px] ${color} ${font} ${className}`}
    />
  )
}

export default TitleSection
