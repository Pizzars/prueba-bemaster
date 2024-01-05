'use client'
import { useEffect, useRef, useState } from 'react'
import TitleSmaller from '../texts/TitleSmaller'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const moveCursor = (e: any) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', moveCursor)
      return () => {
        window.removeEventListener('mousemove', moveCursor)
      }
    }
  }, [])

  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return
    const dark = cursor.querySelector('.dark') as any
    const light = cursor.querySelector('.light') as any
    const handleMoseOver = (event: any) => {
      try {
        // Verifica si el objetivo del evento es una etiqueta <a>
        if (event && event.target && event.target.classList.contains('cursor')) {
          if (event.target.classList.contains('dark-cursor')) {
            if (dark && light) {
              dark.style.display = 'block'
              light.style.display = 'none'
            }
          } else {
            if (dark && light) {
              dark.style.display = 'none'
              light.style.display = 'block'
            }
          }
          // cursor.style.display = 'block'
          cursor.style.opacity = '1'
          cursor.style.transform = 'scale(1)'
        } else {
          // cursor.style.display = 'none'
          cursor.style.opacity = '0'
          cursor.style.transform = 'scale(0)'
        }
      } catch (error) {}
    }
    document.addEventListener('mouseover', handleMoseOver)
    return () => {
      document.removeEventListener('mouseover', handleMoseOver)
    }
  }, [])

  return (
    <div
      className='hidden desk:block fixed w-32 h-32 rounded-full pointer-events-none z-50 pointer'
      style={{
        top: `${cursorPosition.y - 78}px`,
        left: `${cursorPosition.x - 64}px`,
        zIndex: 9999,
        pointerEvents: 'none'
      }}
      id='cursor-container'
    >
      <div
        className='w-32 h-32 bg-white bg-opacity-10 rounded-full pointer-events-none z-50 pointer transition-all'
        style={{
          transition: '0.3s all ease',
          pointerEvents: 'none',
          opacity: 0
        }}
        ref={ref}
      >
        <div className='light'>
          <TitleSmaller
            text={'EXPLORE'}
            className='inter opacity-100 desk:text-[14px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'
          />
        </div>
        <div className='dark hidden'>
          <TitleSmaller
            text={'EXPLORE'}
            className='inter opacity-100 desk:text-[14px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black-app'
          />
        </div>
      </div>
    </div>
  )
}

export default Cursor
