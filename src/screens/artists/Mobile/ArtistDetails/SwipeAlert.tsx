'use client'

import { useEffect, useState } from 'react'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

const SwipeAlert = () => {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 4000)
  }, [])

  return (
    <div
      className={`desk:hidden fixed bottom-0 left-0 flex items-center p-8 bg-yellow-app w-full transition delay-300 ${
        visible ? 'opacity-1' : 'opacity-0'
      }`}
    >
      <TitleSmall text='SWIPE FOR MORE ARTISTS' />
    </div>
  )
}

export default SwipeAlert
