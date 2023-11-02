'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getPodcastsData } from 'src/redux/features/podcastsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleMedium from 'src/screens/components/texts/TitleMedium'

const PodcastDetail = () => {
  const { id } = useParams()

  const list = useAppSelector(state => state.podcastsReducer.data)
  const status = useAppSelector(state => state.podcastsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (status === StateRequest.EMPTY) dispatch(getPodcastsData(1))
  }, [status])

  if (!list) return <></>

  const podcast = list.find(pd => {
    return pd.id == (id as any)
  })

  if (!podcast) return <></>

  return (
    <div className='flex flex-col desk:flex-row-reverse desk:p-16 big:p-24 bg-white'>
      <div className='w-full mb-2 h-[80vw] bg-black-app relative desk:w-[452px] desk:h-[452px] big:w-[600px] big:h-[600px] desk:sticky desk:top-24'>
        <iframe
          // allowTransparency={true}
          scrolling='no'
          frameBorder='no'
          allow='autoplay'
          src={`https://w.soundcloud.com/player/?url=${podcast.url}&color=%23${(
            podcast.color ?? '222222'
          ).replace(
            '#',
            ''
          )}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
      <div className='p-8 flex flex-col desk:pl-0 desk:py-4 desk:pr-16 desk:flex-1 max-w-[768px] desk:mr-auto'>
        <TitleMedium text={`${podcast.title}`} className='hidden desk:block mb-auto' />
        <TextParagraph
          className='font-light desk:mt-12'
          text={`Nico Moreno delivers B4’s latest musical voyage, stamping her dynamic tech-house signature on a very fresh mix session.

Nico is a connoisseur of the dance-floor, having cultivated much of her experience for a decade as resident of Cafe Mambo Ibiza and touting around Europe. In this mix Sara melts the Island’s sultry sounds and positive energy, with neat and powerful tech tunes, minimal-house sounds and progressive-house music.

The B4Podcast 114 is brought to you courtesy of this young veteran of the ‘Isla Blanca’… LISTEN & ENJOY!`}
        />
      </div>
    </div>
  )
}

export default PodcastDetail
