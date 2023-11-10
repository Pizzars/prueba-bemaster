import React, {
  useState,
  useEffect
  // useRef
} from 'react'
import { useSpring, animated } from 'react-spring'
import TitleSection from '../components/texts/TitleSection'
import { TextColors } from 'src/utils/Colors'
import './styles.css'
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon'
import Link from 'next/link'
import { useAppSelector } from 'src/redux/hooks'
import ReactDOM from 'react-dom'
import TitleSmaller from '../components/texts/TitleSmaller'
// import { usePathname } from 'next/navigation'

const carouselTexts = ['WORLDWIDE', 'FOR EUROPE', 'FOR SPAIN', 'LATIN AMERICA', 'SPAIN & LATAM']

const AnimatedText = () => {
  const [index, setIndex] = useState(0)
  const artists = useAppSelector(state => state.artistsReducer.data)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  //   const containerRef = useRef(null)
  //   const pathname = usePathname()

  useEffect(() => {
    const moveCursor = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  const groupedArtists = []

  if (!artists) return <></>

  for (let i = 0; i < artists.length; i += 4) {
    groupedArtists.push(artists.slice(i, i + 4))
  }

  const props = useSpring({
    transform: `translateX(-${index * 100}%)`,
    from: { transform: `translateX(-${index * 100}%)` },
    config: { tension: 220, friction: 120 }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % carouselTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const cursorComponent = (
    <div
      className='hidden desk:block fixed w-32 h-32 bg-white bg-opacity-10 rounded-full pointer-events-none z-50 pointer'
      style={{
        top: `${cursorPosition.y - 78}px`,
        left: `${cursorPosition.x - 64}px`,
        zIndex: 9999
      }}
    >
      <TitleSmaller
        text={'EXPLORE'}
        className='inter opacity-100 desk:text-[14px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'
      />
    </div>
  )

  return (
    <div className='relative h-screen bg-black overflow-hidden pointer'>
      {ReactDOM.createPortal(cursorComponent, document.body)}

      <div className='animated-text z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-1 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-2 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='animated-text animated-text-delayed-3 z-10'>
        {groupedArtists.map((group, index) => (
          <TitleSection
            key={index}
            text={group.map(artist => artist.name.toUpperCase()).join('. ')}
            color={TextColors.gray}
            className='mb-2 whitespace-nowrap overflow-hidden ml-[-25%]'
          />
        ))}
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black z-20' />
      <div className='absolute bottom-0 z-30 text-white pl-4'>
        <Link href='/artists' className='flex flex-row customLink'>
          <TitleSection text={`ARTISTS`} color={TextColors.white} className='textBesideIcon' />
          <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.white} />
        </Link>
        <div className='overflow-hidden' style={{ width: '100%' }}>
          <animated.div style={props} className='flex transition-all duration-500'>
            {carouselTexts.map((text, i) => (
              <div
                key={i}
                className='flex-shrink-0'
                style={{ whiteSpace: 'nowrap', minWidth: '100%' }}
              >
                <TitleSection text={text} color={TextColors.white} />
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedText
