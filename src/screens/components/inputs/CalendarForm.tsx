import React, { useState } from 'react'
import Label from './Label'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'
import Calendar from 'react-calendar'
import { formatDate } from 'src/utils/functions'

interface Params {
  value?: Date
  onChange: (value: Date) => void
  height?: string
}

const CalendarForm = ({ value, height = '28rem', onChange }: Params) => {
  const [opened, setOpened] = useState(false)

  const heightAnimation = useSpring({
    height: opened ? height : '0rem'
  })

  return (
    <Label
      name='PREFERRED date'
      value={value ? formatDate(value) : 'MAKE A SELECTION'}
      icon={TextIcons.CALENDAR}
      onClick={() => setOpened(!opened)}
    >
      <animated.div
        className='bg-black flex flex-col items-end overflow-hidden'
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
    </Label>
  )
}

export default CalendarForm
