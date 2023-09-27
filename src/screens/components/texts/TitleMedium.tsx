import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TitleMedium = ({
  text,
  tag = TextTags.H2,
  className = '',
  color = TextColors.black,
  font = Fonts.swis
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[22px] leading-[19.8px] ${color} ${font} ${className}`}
    />
  )
}

export default TitleMedium
