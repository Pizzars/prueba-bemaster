import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { useAppSelector } from 'src/redux/hooks'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSection from 'src/screens/components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'

const AnimatedText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const props = useSpring({
    from: {
      transform: 'translateY(100%)'
    },
    to: {
      transform: 'translateY(0%)'
    },
    config: {
      duration: 30000
    },
    loop: true
  })
  return (
    <animated.div style={props} ref={ref}>
      <TitleSection
        text={text}
        color={TextColors.gray}
        tag={TextTags.P}
        className='overflow-hidden font-bold'
      />
    </animated.div>
  )
}

const ArtistListSlide = () => {
  const artists = useAppSelector(state => state.artistsReducer.data)
  const groupedArtists = []

  if (!artists) return <></>

  for (let i = 0; i < artists.length; i += 4) {
    groupedArtists.push(artists.slice(i, i + 4))
  }

  let text = ''

  groupedArtists.forEach(group => {
    group.forEach(artist => {
      text = `${text} ${artist.name.toUpperCase()}.`
    })
  })

  return (
    <>
      <div className='overflow-hidden w-full'>
        <div className='animated-text z-10 w-[150%] min-w-[150%] ml-[-10%]'>
          <AnimatedText text={text} />
          <AnimatedText text={text} />
          <AnimatedText text={text} />
        </div>
      </div>
      <div className='w-full h-full top-0 left-0 absolute inset-0 bg-gradient-to-b from-black-app/10 to-black-app z-20' />
    </>
  )
}

export default ArtistListSlide
