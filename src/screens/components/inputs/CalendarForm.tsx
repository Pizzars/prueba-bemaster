import React, { useState } from 'react'
import Label from './Label'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'
import Calendar from 'react-calendar'
import { formatDate } from 'src/utils/functions'
import useWindowSize from 'src/hooks/useWindowSize'

interface Params {
  value?: Date
  onChange: (value: Date) => void
  height?: string
}

const CalendarForm = ({ value, height = '28rem', onChange }: Params) => {
  const [opened, setOpened] = useState(false)

  const size = useWindowSize().width ?? 0

  const heightAnimation = useSpring({
    height: size > 1023 ? height : opened ? height : '0rem',
    display: size > 1023 ? (opened ? 'block' : 'none') : 'block'
  })

  return (
    <Label
      name='PREFERRED date'
      value={value ? formatDate(value) : 'MAKE A SELECTION'}
      icon={TextIcons.CALENDAR}
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
          className='bg-black flex flex-col items-end overflow-hidden desk:absolute desk:w-[400px] desk:left-[-415px] desk:top-[-12rem] z-10'
          style={heightAnimation}
        >
          <Calendar
            onChange={(value: any) => {
              if (!value) return
              onChange(new Date(value?.toString()))
            }}
            className='text-white p-8'
            locale='en-GB'
            value={value}
            minDate={new Date()}
          />
          <button className='mx-8' onClick={() => setOpened(false)}>
            <TitleSmall text='DONE' tag={TextTags.SPAN} />
          </button>
        </animated.div>
      </>
    </Label>
  )
}

export default CalendarForm
