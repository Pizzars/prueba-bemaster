'use client'
import { useEffect } from 'react'
import useWindowSize from 'src/hooks/useWindowSize'
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
  selected?: number
  onChage?: (option: string) => void
}

const OptionsCompleteFilter = ({
  options,
  color = optionColors.white,
  className = '',
  selected = 0,
  onChage
}: Params) => {
  // const [activeTab, setActiveTab] = useState<string>(options?.[0]?.option || 'ENGLISH')
  // const [activeTab, setActiveTab] = useState(0)
  const size = useWindowSize()

  const handleTabClick = (tab: number) => {
    const scrollContainer = document.getElementById('scroll-container')
    const container = document.getElementById('options-container')
    const lineContainer = document.getElementById('line-container')
    const line = document.getElementById('line')
    if (container && lineContainer && line && scrollContainer) {
      const list = container.querySelectorAll('.option')
      const option = list[tab] as any
      if (option) {
        const widthScreen = window.innerWidth ?? 0
        const pos = (option.offsetLeft ?? 0) - (widthScreen >= 1400 ? 100 : 64)
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
  }

  useEffect(() => {
    const scrollContainer = document.getElementById('scroll-container')
    const container = document.getElementById('options-container')
    const lineContainer = document.getElementById('line-container')
    const line = document.getElementById('line')
    if (container && lineContainer && line && scrollContainer) {
      lineContainer.style.width = `${container.offsetWidth}px`
    }

    if (selected !== undefined) handleTabClick(selected)
  }, [size])

  return (
    <div
      className={`desk:pt-0 pb-2 flex flex-col overflow-x-auto desk:overflow-x-visible whitespace-nowrap w-full`}
      id='scroll-container'
    >
      <div
        className={`pt-6 desk:pt-0 pb-2 desk:pb-0 flex justify-between whitespace-nowrap `}
        id='options-container'
      >
        {options?.map(({ title, option }, i) => {
          return (
            <div
              key={option}
              data-tab={option}
              onClick={() => (!onChage ? null : onChage(option))}
              className={`cursor-pointer option mx-2 my-2 ${
                i === options.length - 1 ? 'desk:mx-0' : 'desk:ml-0 '
              }`}
            >
              <div className={``}>
                <TitleMedium
                  text={title}
                  color={TextColors.white}
                  className={`text-[22px] leading-[17.71] big:text-[26px] big:leading-[24px] uppercase cursor-pointer transition-all duration-500 ${
                    selected === i ? color.textActive : color.textInactive
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

export default OptionsCompleteFilter
