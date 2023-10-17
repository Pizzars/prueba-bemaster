import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TextSmall = ({
  text,
  tag = TextTags.P,
  className = '',
  color = TextColors.blue,
  font = Fonts.heveltica
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[10px] leading-[10px] ${color} ${font}  ${className}`}
    />
  )
}

export default TextSmall