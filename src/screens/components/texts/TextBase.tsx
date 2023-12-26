import SplitText from './SplitText'

export enum TextTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
  DIV = 'div'
}

export enum Fonts {
  inter = 'inter',
  heveltica = 'heveltica',
  swis = 'swis'
}

interface Params {
  tag?: TextTags
  text: string | any
  className: string
  ref?: any
}

const TextBase = ({ tag = TextTags.SPAN, text, className, ref }: Params) => {
  const ElementoEncabezado = tag

  return (
    <ElementoEncabezado className={className} ref={ref}>
      {typeof text === 'string' ? <SplitText text={text} /> : text}
    </ElementoEncabezado>
  )
}

export default TextBase
