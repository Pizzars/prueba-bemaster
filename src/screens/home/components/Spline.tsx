import React, { useEffect, useRef, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import { useSpring, animated } from 'react-spring'

const Spline = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  const load = useAppSelector(state => state.loadReducer.home)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.489/build/spline-viewer.js'
    document.body.appendChild(script)

    // script.onload = () => {
    const container = ref.current
    if (container) {
      const list = container.querySelectorAll('spline-viewer')
      if (list.length > 0) return

      const spline = document.createElement('spline-viewer')
      // ;(spline as any).url = 'https://prod.spline.design/8MZRGCAOH9d0Kg0p/scene.splinecode'
      ;(spline as any).url = '/assets/spline/LiquidBGB4Bookings.splinecode'

      container.appendChild(spline)
    }

    // }
  }, [])

  useEffect(() => {
    if (load && !show) {
      setTimeout(() => {
        setShow(true)
      }, 1600)
    }
  }, [load, show])

  const props = useSpring({
    opacity: show ? 1 : 0,
    config: { duration: 300 }
  })

  return (
    <animated.div style={props} className={`fixed inset-0 -z-10`}>
      <div id='animation-container' ref={ref} className='w-[100vw] h-[100vh]'></div>
    </animated.div>
  )
}

export default Spline
