import React from 'react'
import Divider from 'src/screens/components/general/Divider'

import TitleMedium from 'src/screens/components/texts/TitleMedium'
import TextIcon, { TextIcons, SizeIcons } from 'src/screens/components/icons/TextIcon'
import { TextColors } from 'src/utils/Colors'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useAppSelector } from 'src/redux/hooks'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { DataModel } from 'src/proxy/queries/data/dataModel'

interface Params {
  item?: DataModel
}

const ContentDetails = ({ item }: Params) => {
  const { id } = useParams()

  const itemRedux = useAppSelector(state => state.artistsReducer.selectedItem)
  const selected = item ?? itemRedux

  if (!selected) return <></>
  // const upcomingEvents = filterFutureEvents(selectedArtist?.events, 2);

  return (
    <div
      className='flex flex-col justify-between desk:h-screen bg-white'
      style={{
        flexBasis: '28.125%'
      }}
    >
      <div className='flex flex-col desk:pl-8 pt-6'>
        <TitleMedium text={selected?.name || 'N/A'} />
        <div className='mt-8'>
          <TextParagraph
            text={selected.description || ''}
            className='helvetica opacity-40 md:opacity-100 big:text-[14px] big:leading-[15.4px]'
          />
          <Divider className='mt-3' />
        </div>
        <div className='mt-8'>
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
      </div>
      <Divider className='mt-3 desk:mx-8' />
      <div className='desk:px-8 desk:my-auto'>
        <div>
          <Link
            href={`${id}/${selected.id}`}
            className='flex items-center mt-0.5 md:mt-2 justify-center desk:justify-start '
          >
            <TitleSmall
              text={`VIEW MORE`}
              className='uppercase md:opacity-80 big:text-[14px] cursor black-cursor dark-cursor hidden desk:block'
            />
            <TitleMedium
              text={`VIEW MORE`}
              className='uppercase md:opacity-80 big:text-[14px] cursor black-cursor dark-cursor desk:hidden'
            />
            <TextIcon
              icon={TextIcons.RIGHT_ARROW}
              size={SizeIcons.TITLE_SMALL}
              className='self-center opacity-40  cursor-pointer ml-0.5 md:purple-app md:opacity-100 big:text-[14px]  cursor black-cursor dark-cursor hidden desk:block'
              cursor
            />
            <TextIcon
              icon={TextIcons.RIGHT_ARROW}
              size={SizeIcons.TITLE_MEDIUM}
              className='self-center opacity-40  cursor-pointer ml-0.5 md:purple-app md:opacity-100 big:text-[14px]  cursor black-cursor dark-cursor desk:hidden'
              cursor
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContentDetails
