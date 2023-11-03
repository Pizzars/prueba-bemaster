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
  active?: boolean
  description?: string
}
const BaseStep = ({
  onClick,
  children,
  options,
  title,
  alt,
  active = true,
  description
}: Params) => {
  return (
    <div>
      <FilterAlt text={title} alt={alt} options={options} className='bg-form-mobile uppercase' />
      <div className='bg-white'>
        {description ? (
          <div className={`${options ? 'pt-[15rem]' : 'pt-[9rem]'}`}>
            <TextParagraph text={description} className='mx-8 my-4' />
          </div>
        ) : (
          <div className='h-[9rem]'></div>
        )}
        {children}
        <div className='h-16 bg-yellow-app w-full flex justify-end px-8 items-center'>
          <button className='bg-none' disabled={!active} onClick={active ? onClick : () => null}>
            <TitleSmall
              text='NEXT'
              className={`${active ? '' : 'opacity-50'}`}
              tag={TextTags.SPAN}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BaseStep
