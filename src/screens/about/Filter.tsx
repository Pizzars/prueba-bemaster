'use client'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { TextColors } from 'src/utils/Colors'
import TitleHome from '../components/texts/TitleHome'
import TitleMedium from '../components/texts/TitleMedium'

const Filter = () => {
  const [scrollY, setScrollY] = useState(0)

  const fade = useSpring({
    opacity: scrollY > 50 ? 0 : 1
  })
  const fade2 = useSpring({
    opacity: scrollY > 50 ? 1 : 0,
    height: scrollY > 50 ? 'auto' : 0
  })

  const shrink = useSpring({
    marginTop: scrollY > 50 ? '-80px' : '0px'
  })

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className='fixed w-full bg-gradient-to-r from-rose-900 from-10% via-red-600 via-30% to-pink-900 to-90% pl-8 z-10'
      style={{}}
    >
      <animated.div style={shrink} className='py-8'>
        <animated.div style={fade}>
          <TitleHome
            text={`ABOUT
          US`}
            color={TextColors.white}
          />
        </animated.div>
        <animated.div style={fade2}>
          <TitleMedium text={`ABOUT US`} color={TextColors.white} />
        </animated.div>
        {/* <div className='pt-6 pb-2'>
          
        </div> */}
      </animated.div>
    </div>
  )
}

export default Filter
