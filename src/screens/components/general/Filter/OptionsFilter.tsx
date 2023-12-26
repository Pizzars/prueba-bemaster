'use client'
import { useEffect, useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TitleMedium from '../../texts/TitleMedium'

export interface OptionColor {
  bgActive: string
  bgInactive: string
  textActive: string
  textInactive: string
}

export const optionColors = {
  white: {
    bgActive: 'bg-white',
    bgInactive: 'bg-white/30',
    textActive: 'text-white',
    textInactive: 'text-white/30'
  },
  black: {
    bgActive: 'bg-black',
    bgInactive: 'bg-black/30',
    textActive: 'text-black',
    textInactive: 'text-black/30'
  }
}

interface Params {
  options: Array<{ title: string; option: string }>
  color?: OptionColor
  className?: string
  step?: number
  onChage?: (option: string) => void
}

const OptionsFilter = ({
  options,
  color = optionColors.white,
  className = '',
  step = 24,
  onChage
}: Params) => {
  // const [activeTab, setActiveTab] = useState<string>(options?.[0]?.option || 'ENGLISH')
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (tab: number) => {
    const scrollContainer = document.getElementById('scroll-container')
    const container = document.getElementById('options-container')
    const lineContainer = document.getElementById('line-container')
    const line = document.getElementById('line')
    if (container && lineContainer && line && scrollContainer) {
      const list = container.querySelectorAll('.option')
      lineContainer.style.width = `${container.offsetWidth}px`
      const option = list[tab] as any
      if (option) {
        const pos = (option.offsetLeft ?? 0) - step
        const size = (option as any).offsetWidth ?? 0
        line.style.width = `${size}px`
        line.style.marginLeft = `${pos}px`
        line.style.marginRight = `auto`
        scrollContainer.scrollTo({
          left: pos,
          behavior: 'smooth'
        })
      }
    }
    setActiveTab(tab)
    if (onChage) {
      onChage(options[tab].option)
    }
  }

  useEffect(() => {
    handleTabClick(0)
  }, [])

  return (
    <div
      className={`desk:pt-0 pb-2 flex flex-col overflow-x-auto desk:overflow-x-visible whitespace-nowrap`}
      id='scroll-container'
    >
      <div
        className={`pt-6 desk:pt-0 pb-2 desk:pb-0 flex whitespace-nowrap `}
        id='options-container'
      >
        {options?.map(({ title, option }, i) => {
          return (
            <div
              key={option}
              data-tab={option}
              onClick={() => handleTabClick(i)}
              className={`cursor-pointer option`}
            >
              <div className='m-2'>
                <TitleMedium
                  text={title}
                  color={TextColors.white}
                  className={`uppercase cursor-pointer transition-all duration-500 ${
                    activeTab === i ? color.textActive : color.textInactive
                  } ${className}`}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className={`${color.bgInactive} h-1 w-full`} id='line-container'>
        <div className={`${color.bgActive} h-1 transition-all duration-500`} id='line'></div>
      </div>
    </div>
  )
}

export default OptionsFilter
