import SplitText from './SplitText'

export enum TextTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span'
}

export enum Fonts {
  inter = 'inter',
  heveltica = 'heveltica',
  swis = 'swis'
}

interface Params {
  tag?: TextTags
  text: string
  className: string
}

const TextBase = ({ tag = TextTags.SPAN, text, className }: Params) => {
  const ElementoEncabezado = tag

  return (
    <ElementoEncabezado className={className}>
      <SplitText text={text} />
    </ElementoEncabezado>
  )
}

export default TextBase