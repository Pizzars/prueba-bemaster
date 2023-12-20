'use client'
import { useEffect, useState } from 'react'
import TitleSmaller from '../texts/TitleSmaller'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

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
    let cursor = document.getElementById('cursor-container')
    const handleMoseOver = (event: any) => {
      try {
        if (!cursor) cursor = document.getElementById('cursor-container')

        if (!cursor) return
        // Verifica si el objetivo del evento es una etiqueta <a>
        if (event && event.target && event.target.classList.contains('cursor')) {
          cursor.style.display = 'block'
        } else {
          cursor.style.display = 'none'
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
      className='hidden desk:block fixed w-32 h-32 bg-white bg-opacity-10 rounded-full pointer-events-none z-50 pointer'
      style={{
        top: `${cursorPosition.y - 78}px`,
        left: `${cursorPosition.x - 64}px`,
        zIndex: 9999
      }}
      id='cursor-container'
    >
      <TitleSmaller
        text={'EXPLORE'}
        className='inter opacity-100 desk:text-[14px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'
      />
    </div>
  )
}

export default Cursor
