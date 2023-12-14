import React, { useEffect, useState } from 'react'
import Label from './Label'
// import Picker from 'react-mobile-picker'
// import { TextColors } from 'src/utils/Colors'
// import TitleMedium from 'src/screens/components/texts/TitleMedium'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'
import useWindowSize from 'src/hooks/useWindowSize'

export interface SelectListParams {
  label: string
  value: string
}

interface Params {
  value: string
  label: string
  onChange: (value: string) => void
  height?: number
  options: SelectListParams[]
}

const Select = ({ label, value, height = 17, options, onChange }: Params) => {
  const [opened, setOpened] = useState(false)
  const size = useWindowSize().width ?? 0

  const heightAnimation = useSpring({
    height: size > 1023 ? `${height}rem` : opened ? `${height}rem` : '0rem',
    display: size > 1023 ? (opened ? 'block' : 'none') : 'block'
  })

  useEffect(() => {
    const container = document.getElementById('container-select')

    if (!container) return
    const list = container.querySelectorAll('.item-select')

    const positionVerification = (centerContainer: any) => {
      const rect = centerContainer.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.top + containerRect.height / 2

      // Comprueba si el contenedor centrado está en el centro del contenedor principal
      const isCentered = rect.top < containerCenter && rect.bottom > containerCenter
      return isCentered
    }

    let timer: any = null
    let selectedItem: any = null

    const setTimer = () => {
      timer = setTimeout(() => {
        if (!selectedItem) return
        const value = selectedItem.querySelector('.hidden').textContent
        onChange(value)
      }, 200)
    }

    container.onscroll = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      setTimer()

      list.forEach(centerContainer => {
        const cont = centerContainer as any
        const isCentered = positionVerification(centerContainer)
        if (isCentered) {
          selectedItem = centerContainer

          cont.style.opacity = 1
          // Puedes realizar acciones específicas cuando el contenedor está en el centro
        } else {
          cont.style.opacity = 0.5
        }
      })
    }
  }, [])

  const valueString = options.find(option => option.value == value)

  return (
    <Label
      name={label}
      value={(valueString ? valueString.label : options[0].label).toUpperCase()}
      icon={TextIcons.DOWN_TRIANGLE}
      onClick={() => setOpened(!opened)}
    >
      <>
        <div
          className={`absolute h-6 w-6 left-[-20px] top-[2rem] hidden ${
            opened ? 'desk:block' : ''
          }`}
        >
          <svg width='100%' viewBox='0 0 21 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M21 12.5L0.749999 24.1913L0.75 0.808656L21 12.5Z' fill='black' />
          </svg>
        </div>
        <animated.div
          className='bg-black flex flex-col items-end overflow-hidden desk:absolute desk:w-[400px] big:w-[450px] desk:left-[-415px]  big:left-[-465px] desk:top-[-4rem] z-10'
          style={heightAnimation}
        >
          <div
            className='border-t-2 border-b-2 border-white w-full absolute left-0 flex justify-center items-center'
            style={{ height: `${height / 7}rem`, top: `${height / 2 - height / 7 / 1.5}rem` }}
          ></div>
          <div
            className='h-full w-full overflow-y-scroll snap-y snap-mandatory relative'
            dir='rtl'
            id='container-select'
          >
            <div style={{ height: `${height / 2 - height / 7 / 2}rem` }}></div>

            {options.map(option => {
              return (
                <div
                  className='border-white w-full flex justify-center items-center snap-center item-select'
                  style={{ height: `${height / 7}rem`, opacity: option.value == value ? 1 : 0.5 }}
                  key={option.value ?? '-'}
                >
                  <div className='hidden'>{option.value}</div>
                  <TitleSmall text={option.label} className='text-white uppercase' />
                </div>
              )
            })}

            <div style={{ height: `${height / 2 - height / 7 / 2}rem` }}></div>
          </div>
          <button className='mx-8 my-4' onClick={() => setOpened(false)}>
            <TitleSmall text='DONE' tag={TextTags.SPAN} />
          </button>
        </animated.div>
      </>
    </Label>
  )
}

export default Select
