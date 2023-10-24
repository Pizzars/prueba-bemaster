'use client'

import { useEffect } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getPodcastsData } from 'src/redux/features/podcastsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { ulrBack } from 'src/utils/consts'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import TitleSmall from '../components/texts/TitleSmall'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
// import bg from '../../assets/general/back_colors.png'
import Link from 'next/link'

export const replaceTitle = (title: string, artists?: ArtistModel[]) => {
  let names = ''
  if (artists) {
    artists.forEach((artist, i) => {
      const name = (artist.name ?? '').toUpperCase()
      names = `${names}${i === 0 ? '' : ' & '}${name}`
    })
  }

  const titleList_p = title.split('. ')
  const newTitle_p = titleList_p[titleList_p.length - 1]
  const titleList = newTitle_p.split(' - ')
  const newTitle = titleList[titleList.length - 1]
  if (names.length === 0) {
    const nTitleList = titleList_p[0].split(' - ')
    names = nTitleList[0]
  }
  return { names, title: newTitle.toUpperCase() }
}

const PodcastList = () => {
  const list = useAppSelector(state => state.podcastsReducer.data)
  const status = useAppSelector(state => state.podcastsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getPodcastsData(1))
  }, [status])
  if (!list) return <></>

  return (
    <div className='desk:grid desk:grid-cols-2 desk:gap-12 big:grid-cols-4'>
      {list.map((podcast, i) => {
        const title = replaceTitle(podcast.title ?? '', podcast.artists ?? [])
        return (
          <div
            key={`podcast-${i}`}
            className={`my-8 desk:my-0 w-full desk:w-full ${
              i % 2 === 0 ? 'desk:mr-auto' : 'desk:ml-auto'
            } big:mx-0`}
          >
            <Link href={`/podcasts/${podcast.id}`}>
              <div className='w-full mb-2 h-[80vw] bg-black-app p-4 relative desk:h-[43vw] big:h-[26vw]'>
                <div className='absolute w-full h-full top-0 left-0'>
                  <img
                    className='w-full h-full object-cover'
                    src={`${ulrBack}${podcast.square_image?.url ?? ''}`}
                    alt={podcast.square_image?.alternativeText ?? podcast.title ?? ''}
                  />
                  {/* <div className='absolute top-0 left-0 w-full h-full bg-black-app bg-opacity-40'></div> */}
                </div>
                {/* <div className='relative p-4'>
                  <TitleMedium
                    text={title.names ?? ''}
                    color={TextColors.white}
                    className='text-[33px] leading-[33px] big:text-[24px]'
                  />
                  <TitleSmall text={title.title ?? ''} color={TextColors.white} className='mt-2' />
                </div> */}
              </div>
              <div className='relative'>
                <TitleSmall text={title.names ?? ''} />
                <div className=''>
                  {/* <TitleSmall text={`B4PODCAST ${podcast.id}`} /> */}
                  <TitleSmall text={`B4PODCAST ${title.title}`} className='inline-block' />
                  <TextIcon
                    icon={TextIcons.RIGHT_ARROW}
                    size={SizeIcons.TITLE_SMALL}
                    className='ml-2 inline-block'
                  />
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PodcastList
