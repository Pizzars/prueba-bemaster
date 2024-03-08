'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { setSelectedItem } from 'src/redux/features/dataSlice'
import Link from 'next/link'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from '../components/texts/TitleSmall'
import TitleHome from '../components/texts/TitleHome'
import Divider from '../components/general/Divider'
import TextParagraph from '../components/texts/TextParagraph'
import Navbar from '../components/general/Navbar'
import TitleMedium from '../components/texts/TitleMedium'

const ContentDetails = () => {
  const { id, idSel } = useParams()
  const selected = useAppSelector(state => state.dataReducer.selectedItem)
  const dataPage = useAppSelector(state => state.dataReducer.dataPage)
  const dispatch = useAppDispatch()

  const data = dataPage ? dataPage[id.toString()] : null

  useEffect(() => {
    if (data && data.length && !selected) {
      const sel = data.find(op => op.id == idSel)
      if (sel) {
        dispatch(setSelectedItem(sel))
      }
    }
  }, [data])

  // if (!selected) return <Loading type={PageLoad.ARTISTS} status={status} />
  if (!selected) return <></>
  return (
    <>
      <div id='secret-nav' className='fixed top-0 left-0 z-50 w-full '>
        <Navbar dark={true} />
      </div>
      <div className='w-full'>
        <div className='bg-white px-4 desk:px-10 py-14 flex flex-col items-start'>
          <Link
            href={`/${id}`}
            className={`flex mt-12 desk:mt-8 mx-6 justify-end items-center mb-8 overflow-hidden relative z-20 cursor-pointer transition-all delay-300`}
          >
            <TextIcon
              icon={TextIcons.LEFT_ARROW}
              color={TextColors.black}
              cursor
              className='hidden desk:block'
            />
            <TextIcon
              icon={TextIcons.LEFT_ARROW}
              color={TextColors.black}
              size={SizeIcons.TITLE_MEDIUM}
              cursor
              className='desk:hidden'
            />
            <TitleSmall
              text='go Back'
              className='ml-2 uppercase swis font-bold whitespace-nowrap cursor black-cursor dark-cursor hidden desk:block'
            />
            <TitleMedium
              text='go Back'
              className='ml-2 uppercase swis font-bold whitespace-nowrap cursor black-cursor dark-cursor desk:hidden'
            />
          </Link>
          <div
            className='relative flex flex-col-reverse desk:flex-row w-full'
            style={{ minHeight: '100vh' }}
          >
            <div className='w-full desk:w-[70%] px-4 desk:px-0 flex flex-col desk:ml-8 desk:mr-10'>
              <div className='flex flex-col'>
                <TitleHome text={selected.name} className='desk:text-[48px] desk:leading-[44px]' />
                <div className='mt-8'>
                  <TextParagraph
                    text={selected.description || ''}
                    className='helvetica opacity-40 md:opacity-100 big:text-[14px] big:leading-[15.4px]'
                  />
                </div>
              </div>
              <Divider />

              <div className='w-full mt-8'>
                {selected.links.map((link, i) => {
                  return (
                    <a
                      key={`link-${i}`}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='uppercase flex'
                    >
                      <TitleSmall
                        text={link.name}
                        className='desk:text-[14px] align-middle cursor black-cursor dark-cursor'
                      />
                      <TextIcon
                        icon={TextIcons.DIAGONAL_ARROW}
                        size={SizeIcons.TITLE_SMALL}
                        color={TextColors.blue}
                        className='self-center ml-1 text-[10px] desk:text-[20px] cursor black-cursor dark-cursor'
                      />
                    </a>
                  )
                })}
              </div>

              <Divider />

              <div className='w-full mt-8'>
                <TextParagraph
                  text={selected.definition || ''}
                  className='helvetica opacity-40 md:opacity-100 big:text-[14px] big:leading-[15.4px]'
                />
              </div>

              <Divider />

              <div className='w-full mt-8'>
                {selected.videos.map((link, i) => {
                  return (
                    <a
                      key={`link-${i}`}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='uppercase flex'
                    >
                      <TitleSmall
                        text={link.name}
                        className='desk:text-[14px] align-middle cursor black-cursor dark-cursor'
                      />
                      <TextIcon
                        icon={TextIcons.DIAGONAL_ARROW}
                        size={SizeIcons.TITLE_SMALL}
                        color={TextColors.blue}
                        className='self-center ml-1 text-[10px] desk:text-[20px] cursor black-cursor dark-cursor'
                      />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className=' mb-8 desk:mb-0 w-full desk:w-[30%] desk:mr-8 desk:sticky top-0'>
              <div className='w-full h-full'>
                <img
                  src={selected?.image ?? ''}
                  alt={selected?.name ?? ''}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentDetails
