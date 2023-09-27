import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TitleHome = ({
  text,
  tag = TextTags.H1,
  className = '',
  color = TextColors.black,
  font = Fonts.swis
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[48px] leading-[43.2px] ${color} ${font} ${className}`}
    />
  )
}

export default TitleHome
