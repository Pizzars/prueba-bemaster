import React from 'react'
import FilterAlt from 'src/screens/components/general/Filter/FilterAlt'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleSection from 'src/screens/components/texts/TitleSection'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
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
    <div className='flex justify-between desk:p-16 big:p-24 '>
      <div className='flex-col hidden desk:flex'>
        <TitleSmall text={alt} color={TextColors.white} />
        <TitleSection
          text={title}
          className='uppercase desk:text-[4.2vw] super:text-[90px]'
          color={TextColors.white}
        />
      </div>
      <div className='w-full desk:w-[50vw] big:w-[40vw] max-w-[768px] relative'>
        <div>
          <FilterAlt
            text={title}
            alt={alt}
            options={options}
            className='bg-form-mobile uppercase desk:hidden'
          />
          <div className='bg-white'>
            {description ? (
              <div className={`${options ? 'pt-[15rem]' : 'pt-[9rem]'} desk:pt-8`}>
                <TextParagraph text={description} className='mx-8 my-4' />
              </div>
            ) : (
              <div className='h-[9rem] desk:h-0'></div>
            )}
            {children}
            <div className='h-16 bg-yellow-app w-full flex justify-end px-8 items-center'>
              <button
                className='bg-none'
                disabled={!active}
                onClick={active ? onClick : () => null}
              >
                <TitleSmall
                  text='NEXT'
                  className={`${active ? '' : 'opacity-50'}`}
                  tag={TextTags.SPAN}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseStep