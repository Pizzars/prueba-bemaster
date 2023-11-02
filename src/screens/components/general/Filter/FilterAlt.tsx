'use client'
import { useRef, useState } from 'react'
import { TextColors } from 'src/utils/Colors'
import TitleHome from '../../texts/TitleHome'
import TitleMedium from '../../texts/TitleMedium'
import TitleSmall from '../../texts/TitleSmall'
import styles from './Filter.module.css'

interface Params {
  text: string
  alt?: string
  options?: Array<{ title: string; option: string }>
  className?: string
  //   handleTabClick?: (option:any) => void
}

const FilterAlt = ({ text, alt, options, className = '' }: Params) => {
  const [activeTab, setActiveTab] = useState<string>(options?.[0]?.option || 'ENGLISH')
  const navRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-tab="${tab}"]`)
      if (activeElement) {
        navRef.current.scroll({
          left: (activeElement as HTMLElement).offsetLeft - 30,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div
      className={`fixed w-full pl-8 z-10 desk:px-16 desk:pt-8 desk:pb-16 desk:static big:p-24 big:pt-16 ${className}`}
      style={{}}
    >
      {options && (
        <div
          ref={navRef}
          className={`pt-6 pb-2 flex overflow-x-auto whitespace-nowrap ${styles.scrollDiv}`}
        >
          {options?.map(({ title, option }, i) => {
            return (
              <div
                key={option}
                data-tab={option}
                onClick={() => handleTabClick(option)}
                className={`cursor-pointer`}
                // style={{ opacity: activeTab === option ? 1 : 0.2 }}
              >
                <div className='m-2'>
                  <TitleMedium
                    text={title}
                    color={TextColors.white}
                    className={`uppercase cursor-pointer transition-all duration-500 ${
                      activeTab === option ? 'text-white' : 'text-white/30'
                    }`}
                  />
                </div>
                <div className={`w-full h-[4px] flex bg-white/30`}>
                  <div
                    className={` h-full bg-white transition-all duration-500 ${
                      i === 0 ? 'ml-auto' : 'mr-auto'
                    } ${activeTab === option ? 'w-[100%]' : 'w-[0%]'}`}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      <div className='py-8 desk:pb-0'>
        {alt && <TitleSmall text={alt} color={TextColors.white} />}
        <TitleHome text={text} color={TextColors.white} />
      </div>
    </div>
  )
}

export default FilterAlt
