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
  font = Fonts.heveltica,
  size = 'text-basic leading-basic'
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
}

export default TextParagraph
