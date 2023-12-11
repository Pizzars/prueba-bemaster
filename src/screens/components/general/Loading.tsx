'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { StateRequest } from 'src/redux/features/baseReducer'
import { useAppSelector } from 'src/redux/hooks'
import TitleHome from '../texts/TitleHome'

const Loading = () => {
  const [count, setCount] = useState(0)
  // const [remove, setRemove] = useState(false)

  const route = usePathname()

  const statusAbout = useAppSelector(state => state.aboutReducer.status)
  const statusArtist = useAppSelector(state => state.artistsReducer.status)
  const statusEvents = useAppSelector(state => state.eventsReducer.status)
  const statusPodcast = useAppSelector(state => state.podcastsReducer.status)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let startTimestamp: number
      const animationDuration = 2000

      const animateCount = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const elapsed = timestamp - startTimestamp

        let progress = Math.min(elapsed / animationDuration, 1)
        progress = Math.sin((progress * Math.PI) / 2)

        const newCount = Math.floor(progress * 100)

        if (newCount < 101) {
          setCount(newCount)
          window.requestAnimationFrame(animateCount)
        }
      }
      window.requestAnimationFrame(animateCount)
    }
  }, [window])

  const showHomeContent = count >= 100

  let cnt = false

  switch (route) {
    case '/about': {
      cnt = statusAbout === StateRequest.SUCCESS
      break
    }
    case '/artists': {
      cnt = statusArtist === StateRequest.SUCCESS
      break
    }
    case '/gigs': {
      cnt = statusEvents === StateRequest.SUCCESS
      break
    }
    case '/podcasts': {
      cnt = statusPodcast === StateRequest.SUCCESS
      break
    }
    case '/book': {
      cnt = true
      break
    }
    case '/': {
      cnt = statusArtist === StateRequest.SUCCESS
      break
    }
  }

  return (
    <>
      {!showHomeContent || !cnt ? (
        // || !remove
        <div className='h-full w-full fixed top-0 left-0 bg-gray-100 flex items-end z-20'>
          <TitleHome text={count.toString()} className='ml-10 mb-8' />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Loading
