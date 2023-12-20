import React, { useEffect } from 'react'
// import splineAnimation from '../../../assets/spline/LiquidBGB4Bookings.splinecode'

const Spline = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.489/build/spline-viewer.js'
    document.body.appendChild(script)

    // script.onload = () => {
    const container = document.getElementById('animation-container')
    if (container) {
      const list = container?.querySelectorAll('spline-viewer')
      if (list.length > 0) return

      const spline = document.createElement('spline-viewer')
      // ;(spline as any).url = 'https://prod.spline.design/8MZRGCAOH9d0Kg0p/scene.splinecode'
      ;(spline as any).url = '/assets/spline/LiquidBGB4Bookings.splinecode'

      container.appendChild(spline)
    }

    // }
  }, [])

  return <div id='animation-container' className='w-[100vw] h-[100vh]'></div>
}

export default Spline
