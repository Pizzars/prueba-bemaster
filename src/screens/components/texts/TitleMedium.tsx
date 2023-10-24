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

const TitleMedium = ({
  text,
  tag = TextTags.H2,
  className = '',
  color = TextColors.black,
  font = Fonts.swis,
  size = 'text-medium leading-medium desk:text-[24px] desk:leading-[21.6px] big:text-[48px] big:leading-[43.2px]'
}: Params) => {
  return <TextBase text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
}

export default TitleMedium
