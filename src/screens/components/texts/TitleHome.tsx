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
      className={`text-[48px] leading-[43.2px] desk:text-[90px] desk:leading-[81px] big:text-[180px] big:leading-[162px] ${color} ${font} ${className}`}
    />
  )
}

export default TitleHome
