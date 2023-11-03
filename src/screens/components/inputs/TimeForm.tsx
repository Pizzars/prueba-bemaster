import React, { useState } from 'react'
import Label from './Label'
import Picker from 'react-mobile-picker'
import { TextColors } from 'src/utils/Colors'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'
import { addZero } from 'src/utils/functions'

interface Params {
  hour: string
  minute: string
  label: string
  onChange: (value: string) => void
  height?: string
  placeholder?: string
}

const hours: string[] = []
const minutes: string[] = []

for (let index = 0; index < 60; index++) {
  if (index < 24) {
    hours.push(`${addZero(index)}`)
  }
  if (index % 5 === 0) {
    minutes.push(`${addZero(index)}`)
  }
}

const TimeForm = ({
  label,
  hour,
  minute,
  height = '17rem',
  onChange,
  placeholder = ''
}: Params) => {
  const [opened, setOpened] = useState(false)

  const pickerValue = {
    hours: hour,
    minutes: minute
  }
  const heightAnimation = useSpring({
    height: opened ? height : '0rem'
  })

  const selections = {
    hours,
    minutes
  }

  return (
    <Label
      name={label}
      value={hour && minute ? `${hour}:${minute}` : placeholder}
      icon={TextIcons.CHECK}
      onClick={() => setOpened(!opened)}
      checked={hour && minute ? true : false}
    >
      <animated.div
        className='bg-black flex flex-col items-end overflow-hidden w-full'
        style={heightAnimation}
      >
        <Picker
          value={pickerValue}
          onChange={values => {
            onChange(`${values.hours ?? '00'}:${values.minutes ?? '00'}`)
          }}
          style={{ color: 'white' }}
          className='w-full'
        >
          {Object.keys(selections).map(name => (
            <Picker.Column key={name} name={name} frameBorder={0}>
              {(selections as any)[name].map((option: any) => (
                <Picker.Item key={option} value={option}>
                  {({ selected }) => (
                    <div style={{ opacity: selected ? 1 : 0.5 }}>
                      <TitleMedium
                        tag={TextTags.SPAN}
                        text={option}
                        className='uppercase '
                        color={TextColors.white}
                      />
                    </div>
                  )}
                </Picker.Item>
              ))}
            </Picker.Column>
          ))}
        </Picker>
        <button className='mx-8 my-4' onClick={() => setOpened(false)}>
          <TitleSmall text='DONE' tag={TextTags.SPAN} />
        </button>
      </animated.div>
    </Label>
  )
}

export default TimeForm
