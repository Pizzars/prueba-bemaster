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

const TitleSmaller = ({
  text,
  tag = TextTags.H4,
  className = '',
  color = TextColors.black,
  font = Fonts.swis,
  size = 'text-[12px] leading-[12px] desk:text-[24px] desk:leading-[21.6px] big:text-[32px] big:leading-[35.2px]'
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
}

export default TitleSmaller
