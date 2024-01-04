import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { useAppSelector } from 'src/redux/hooks'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSection from 'src/screens/components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'

const AnimatedText = ({ text }: { text: any }) => {
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
    // <animated.div style={{ transform: 'translateY(90%)' }} ref={ref}>
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
  // const groupedArtists = []

  if (!artists) return <></>

  // for (let i = 0; i < artists.length; i += 4) {
  //   groupedArtists.push(artists.slice(i, i + 4))
  // }

  const text: any[] = []
  const textBottom: any[] = []

  const getRand = () => {
    const num = Math.floor(Math.random() * artists.length)
    return artists[num]
  }

  ;[...artists, getRand(), getRand(), getRand(), getRand(), getRand()].forEach(artist => {
    const tx = `${artist.name}. `

    tx.toUpperCase()
      .split('')
      .forEach(letter => {
        text.push(letter)
      })
  })
  ;[getRand(), getRand(), getRand(), getRand(), getRand()].forEach(artist => {
    const tx = `${artist.name}. `

    tx.toUpperCase()
      .split('')
      .forEach(letter => {
        textBottom.push(letter)
      })
  })

  const Bottom = () => {
    return (
      <div className='w-full overflow-hidden absolute bottom-0 left-0 whitespace-nowrap bg-black pt-[0.2rem] translate-y-[-0.05rem]'>
        {textBottom.map((tx, i) => {
          if (tx === ' ') {
            return (
              <span className='inline-block mx-2 desk:mx-4' key={`l-${i}`}>
                {' '}
              </span>
            )
          }
          return (
            <span className='inline-block' key={`l-${i}`}>
              {tx}
            </span>
          )
        })}
      </div>
    )
  }

  const content = (
    <div className='w-full flex flex-wrap relative bg-black'>
      {text.map((tx, i) => {
        if (tx === ' ') {
          return (
            <span className='inline-block mx-2 desk:mx-4' key={`l-${i}`}>
              {' '}
            </span>
          )
        }
        return (
          <span className='inline-block' key={`l-${i}`}>
            {tx}
          </span>
        )
      })}
      <Bottom />
    </div>
  )

  return (
    <>
      <div className='overflow-hidden w-full'>
        <div className='animated-text z-10 w-[106%] min-w-[110%] ml-[-3%]'>
          <AnimatedText text={content} />
          <AnimatedText text={content} />
          {/* <AnimatedText text={content} /> */}
        </div>
      </div>
      <div className='w-full h-full top-0 left-0 absolute inset-0 bg-gradient-to-b from-black-app/10 to-black-app z-20' />
    </>
  )
}

export default ArtistListSlide
