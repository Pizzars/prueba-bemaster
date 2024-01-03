'use client'
import { useEffect, useRef, useState } from 'react'
import TitleSmaller from '../texts/TitleSmaller'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLInputElement | null>(null)
  const refChild = useRef<HTMLInputElement | null>(null)
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
    const handleMoseOver = (event: any) => {
      try {
        const cursor = ref.current
        const childC = refChild.current
        if (!cursor || !childC) return

        // Verifica si el objetivo del evento es una etiqueta <a>
        if (event && event.target && event.target.classList.contains('cursor')) {
          // cursor.style.display = 'block'
          childC.style.opacity = '1'
          childC.style.transform = 'scale(1)'
        } else {
          // cursor.style.display = 'none'
          childC.style.opacity = '0'
          childC.style.transform = 'scale(0)'
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
      ref={ref}
      id='cursor-container'
    >
      <div
        className='w-32 h-32 bg-white bg-opacity-10 rounded-full pointer-events-none z-50 pointer transition-all'
        style={{
          transition: '0.3s all ease',
          pointerEvents: 'none',
          opacity: 0
        }}
        ref={refChild}
      >
        <TitleSmaller
          text={'EXPLORE'}
          className='inter opacity-100 desk:text-[14px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'
        />
      </div>
    </div>
  )
}

export default Cursor
