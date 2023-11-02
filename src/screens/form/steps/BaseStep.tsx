import React from 'react'
import FilterAlt from 'src/screens/components/general/Filter/FilterAlt'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
interface Params {
  onClick: () => void
  children: any
  options?: Array<{ title: string; option: string }>
  title: string
  alt?: string
}
const BaseStep = ({ onClick, children, options, title, alt }: Params) => {
  return (
    <div>
      <FilterAlt text={title} alt={alt} options={options} className='bg-form-mobile uppercase' />
      <div className='pt-[15rem]'>
        <TextParagraph
          text='Please provide the following information to make an artist inquiry.'
          className='mx-8 my-4'
        />
      </div>
      {children}
      <div className='h-16 bg-yellow-app w-full flex justify-end px-8 items-center'>
        <button className='bg-none' onClick={onClick}>
          <TitleSmall text='NEXT' tag={TextTags.SPAN} />
        </button>
      </div>
    </div>
  )
}

export default BaseStep
