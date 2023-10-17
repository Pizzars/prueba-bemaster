'use client'

import { useEffect } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getPodcastsData } from 'src/redux/features/podcastsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TitleMedium from '../components/texts/TitleMedium'
import { TextColors } from 'src/utils/Colors'
import { ulrBack } from 'src/utils/consts'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import TitleSmall from '../components/texts/TitleSmall'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'

const PodcastList = () => {
  const list = useAppSelector(state => state.podcastsReducer.data)
  const status = useAppSelector(state => state.podcastsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getPodcastsData(1))
  }, [status])
  if (!list) return <></>

  const replaceTitle = (title: string, artists?: ArtistModel[]) => {
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

  return (
    <div>
      {list.map((podcast, i) => {
        const title = replaceTitle(podcast.title ?? '', podcast.artists ?? [])
        return (
          <div key={`podcast-${i}`} className='my-8'>
            <div className='w-full mb-2 h-[80vw] bg-black-app p-4 relative'>
              <div className='absolute w-full h-full top-0 left-0'>
                <img
                  className='w-full h-full object-cover'
                  src={`${ulrBack}${podcast.square_image?.url ?? ''}`}
                  alt={podcast.square_image?.alternativeText ?? podcast.title ?? ''}
                />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-900 from-10% via-red-600 via-30% to-pink-900 to-90% opacity-50'></div>
                <div className='absolute top-0 left-0 w-full h-full bg-black-app bg-opacity-40'></div>
              </div>
              <div className='relative'>
                <TitleMedium
                  text={title.names ?? ''}
                  color={TextColors.white}
                  className='text-[32px] leading-8'
                />
                {/* <TitleSmall text={title.title ?? ''} color={TextColors.white} className='mt-2' /> */}
                <TitleSmall
                  text={`B4PODCAST ${podcast.id}`}
                  color={TextColors.white}
                  className='mt-2'
                />
              </div>
            </div>
            <div className='relative'>
              <TitleSmall text={title.names ?? ''} />
              <div className='flex items-center'>
                <TitleSmall text={`B4PODCAST ${podcast.id}`} />
                <TextIcon
                  icon={TextIcons.RIGHT_ARROW}
                  size={SizeIcons.TITLE_SMALL}
                  className='ml-2'
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PodcastList