import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
}

const TitleSmaller = ({
  text,
  tag = TextTags.H3,
  className = '',
  color = TextColors.black,
  font = Fonts.swis
}: Params) => {
  return (
    <TextBase
      text={text}
      tag={tag}
      className={`text-[12px] leading-[12px] lg:text-[24px] lg:leading-[21.6px] big:text-[32px] big:leading-[35.2px]  ${color} ${font} ${className}`}
    />
  )
}

export default TitleSmaller
