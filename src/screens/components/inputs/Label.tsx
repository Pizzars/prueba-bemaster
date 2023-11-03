import { ReactElement } from 'react'
import TextIcon, { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

interface Params {
  name: string
  value?: string
  icon?: TextIcons
  isInput?: boolean
  children?: ReactElement<any, any>
  onClick?: () => void
}

const Label = ({ name, value, icon, onClick = () => null, children, isInput = false }: Params) => {
  return (
    <>
      <div className='border-b-2 border-black px-8 py-6 flex items-center' onClick={onClick}>
        <div className='flex-1'>
          <TextParagraph className='uppercase' text={name} tag={TextTags.SPAN} />
          {value && <TitleSmall text={value} tag={TextTags.SPAN} />}
          {isInput ? children : <></>}
        </div>
        {icon && <TextIcon icon={icon} />}
      </div>
      {!isInput ? children : <></>}
    </>
  )
}

export default Label
