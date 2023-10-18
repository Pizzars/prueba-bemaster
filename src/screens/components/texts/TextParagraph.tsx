import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
  size?: string
}

const TextParagraph = ({
  text,
  tag = TextTags.P,
  className = '',
  color = TextColors.black,
  font = Fonts.heveltica
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[14px] leading-[19.6px] big:text-[24px] big:leading-[33.6px] ${color} ${font} ${className}`}
    />
  )
}

export default TextParagraph
