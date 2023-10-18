'use client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
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
    <div>
      <div className='w-full mb-2 h-[80vw] bg-black-app p-4 relative'>
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
      <div className='p-8'>
        {/* <TextParagraph text={podcast.description_en ?? ''} /> */}
        <TextParagraph
          className='font-normal'
          text={`Nico Moreno delivers B4’s latest musical voyage, stamping her dynamic tech-house signature on a very fresh mix session.

Nico is a connoisseur of the dance-floor, having cultivated much of her experience for a decade as resident of Cafe Mambo Ibiza and touting around Europe. In this mix Sara melts the Island’s sultry sounds and positive energy, with neat and powerful tech tunes, minimal-house sounds and progressive-house music.

The B4Podcast 114 is brought to you courtesy of this young veteran of the ‘Isla Blanca’… LISTEN & ENJOY!`}
        />
      </div>
    </div>
  )
}

export default PodcastDetail
