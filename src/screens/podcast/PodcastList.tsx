'use client'

import { useEffect } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getPodcastsData } from 'src/redux/features/podcastsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { ulrBack } from 'src/utils/consts'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import Link from 'next/link'
import TextWithIcon from '../components/icons/TextWithIcon'

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
  const { data: list, status } = useAppSelector(state => state.podcastsReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getPodcastsData(1))
  }, [status])

  if (!list) return <></>

  return (
    <div className='desk:grid desk:grid-cols-2 desk:gap-12 big:gap-[4vw] big:grid-cols-4'>
      {list.map((podcast, i) => {
        return (
          <div
            key={`podcast-${i}`}
            className={`my-8 desk:my-0 w-full desk:w-full ${
              i % 2 === 0 ? 'desk:mr-auto' : 'desk:ml-auto'
            } big:mx-0`}
          >
            <Link href={`/podcasts/${podcast.id}`}>
              <div className='w-full mb-2 h-[80vw] bg-black-app p-4 relative desk:h-[43vw] big:h-[18.6vw]'>
                <div className='absolute w-full h-full top-0 left-0'>
                  <img
                    className='w-full h-full object-cover cursor'
                    src={`${ulrBack}${podcast.square_image?.url ?? ''}`}
                    alt={podcast.square_image?.alternativeText ?? podcast.title ?? ''}
                  />
                </div>
              </div>
              <div className='relative'>
                <div className=''>
                  <TextWithIcon
                    text={`B4PODCAST ${podcast.title} `}
                    className='inline-block cursor'
                    icon={TextIcons.RIGHT_ARROW}
                    size={SizeIcons.TITLE_SMALL}
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
