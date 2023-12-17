import React from 'react'
import FilterAlt from 'src/screens/components/general/Filter/FilterAlt'
import OptionsFilter, { optionColors } from 'src/screens/components/general/Filter/OptionsFilter'
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
  hideButton?: boolean
  description?: string
  titleClass?: string
  textButton?: string
}
const BaseStep = ({
  onClick,
  children,
  options,
  title,
  alt,
  active = true,
  hideButton = false,
  description,
  textButton = 'NEXT',
  titleClass = 'uppercase desk:text-[4.2vw] super:text-[90px]'
}: Params) => {
  return (
    <div className='flex justify-between desk:p-16 big:p-24'>
      <div className='flex-col hidden desk:flex sticky top-0'>
        <TitleSmall text={alt} color={TextColors.white} />
        <TitleSection text={title} className={titleClass} color={TextColors.white} />
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
            {options && (
              <div className='px-8 flex justify-start'>
                <OptionsFilter
                  options={options}
                  color={optionColors.black}
                  className='desk:text-little '
                />
              </div>
            )}
            {description ? (
              <div className={`${options ? 'pt-[15rem]' : 'pt-[9rem]'} desk:pt-8`}>
                <TextParagraph text={description} className='mx-8 my-4' />
              </div>
            ) : (
              <div className='h-[9rem] desk:h-0'></div>
            )}
            {children}
            {!hideButton && (
              <div className='h-16 bg-yellow-app w-full flex justify-end px-8 items-center'>
                <button
                  className='bg-none'
                  disabled={!active}
                  onClick={active ? onClick : () => null}
                >
                  <TitleSmall
                    text={textButton}
                    className={`${active ? '' : 'opacity-50'}`}
                    tag={TextTags.SPAN}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseStep
