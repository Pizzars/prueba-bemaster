import { TextColors } from 'src/utils/Colors'
import TextBase, { Fonts, TextTags } from './TextBase'

interface Params {
  text: string | any
  className?: string
  tag?: TextTags
  color?: TextColors
  font?: Fonts
  size?: string
  ref?: any
}

const TitleHome = ({
  text,
  tag = TextTags.H1,
  className = '',
  color = TextColors.black,
  font = Fonts.swis,
  size = 'text-larger leading-larger',
  ref
}: Params) => {
  return (
    <TextBase ref={ref} text={text} tag={tag} className={`${size} ${color} ${font} ${className}`} />
  )
}

export default TitleHome
