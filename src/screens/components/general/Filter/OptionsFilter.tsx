'use client'
import { useEffect, useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TitleMedium from '../../texts/TitleMedium'
import styles from './Filter.module.css'

interface Params {
  options?: Array<{ title: string; option: string }>
}

const OptionsFilter = ({ options }: Params) => {
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
        const pos = (option.offsetLeft ?? 0) - 24
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
  }

  useEffect(() => {
    handleTabClick(0)
  }, [])

  return (
    <div
      className={`pt-6 pb-2 flex flex-col overflow-x-auto whitespace-nowrap ${styles.scrollDiv}`}
      id='scroll-container'
    >
      <div className={`pt-6 pb-2 flex whitespace-nowrap `} id='options-container'>
        {options?.map(({ title, option }, i) => {
          return (
            <div
              key={option}
              data-tab={option}
              onClick={() => handleTabClick(i)}
              className={`cursor-pointer option`}
              // style={{ opacity: activeTab === option ? 1 : 0.2 }}
            >
              <div className='m-2'>
                <TitleMedium
                  text={title}
                  color={TextColors.white}
                  className={`uppercase cursor-pointer transition-all duration-500 ${
                    activeTab === i ? 'text-white' : 'text-white/30'
                  }`}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className='bg-white/30 h-1 w-full' id='line-container'>
        <div className='bg-white h-1 transition-all duration-500' id='line'></div>
      </div>
    </div>
  )
}

export default OptionsFilter
