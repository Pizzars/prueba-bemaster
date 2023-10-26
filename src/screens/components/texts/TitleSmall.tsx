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

const TitleSmall = ({
  text,
  tag = TextTags.H3,
  className = '',
  color = TextColors.black,
  font = Fonts.swis,
  size = 'text-small leading-small '
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
}

export default TitleSmall
