'use client'

import { useEffect } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getPolicyData } from 'src/redux/features/policySlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { TextTags } from '../components/texts/TextBase'
import TextParagraph from '../components/texts/TextParagraph'
import TitleMedium from '../components/texts/TitleMedium'
import TitleSmall from '../components/texts/TitleSmall'

const Content = () => {
  const { data, status } = useAppSelector(state => state.policyReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getPolicyData())
  }, [status])

  const getTextType = (text: string) => {
    if (!text) return <></>
    if (
      text.includes('###### ') ||
      text.includes('##### ') ||
      text.includes('#### ') ||
      text.includes('### ') ||
      text.includes('## ')
    ) {
      return <TitleSmall text={text.replaceAll('#', '')} className='mt-8 desk:text-white w-full' />
    }
    if (text.includes('# ')) {
      return (
        <TitleMedium text={text.replaceAll('# ', '')} className='mt-8 desk:text-white w-full' />
      )
    }
    if (text.includes('**')) {
      const content = text.split('**').map((tx, i) => {
        return (
          <span className={`${i === 1 ? '' : 'opacity-70'}`} key={`ttx-${i}`}>
            {tx}
          </span>
        )
      })
      return <p>{content}</p>
    }
    return <TextParagraph text={text} className='mt-8 desk:text-white w-full opacity-70' />
  }

  const getBio = (text: string) => {
    return (
      <div>
        {text.split('\n').map((tx, i) => {
          return <div key={`pr-${i}`}>{getTextType(tx)}</div>
        })}
      </div>
    )
  }

  return (
    <>
      <div>
        <div className='px-8 desk:p-16 big:p-24 desk:flex'>
          <div className='desk:ml-auto desk:px-8 w-full super:w-[1000px] big:mr-auto big:ml-[8vw] super:ml-[151px]'>
            <TextParagraph
              text={getBio(data?.content ?? '')}
              className='mt-8 desk:text-white w-full'
              tag={TextTags.DIV}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
