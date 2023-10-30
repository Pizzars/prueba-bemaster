import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string | any
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
  size?: string
}

const TextSmall = ({
  text,
  tag = TextTags.P,
  className = '',
  color = TextColors.blue,
  font = Fonts.heveltica,
  size = 'text-[10px] leading-[10px]'
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font}  ${className}`} />
}

export default TextSmall
