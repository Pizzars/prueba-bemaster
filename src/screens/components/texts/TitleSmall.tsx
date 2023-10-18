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
  size = 'text-[14px] leading-[14px] desk:text-[24px] desk:leading-[21.6px]'
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
}

export default TitleSmall
