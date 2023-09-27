import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TitleSmall = ({
  text,
  tag = TextTags.H3,
  className = '',
  color = TextColors.black,
  font = Fonts.swis
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[14px] leading-[14px] ${color} ${font} ${className}`}
    />
  )
}

export default TitleSmall
