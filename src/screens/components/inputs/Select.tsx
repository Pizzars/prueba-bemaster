import React, { useEffect, useState } from 'react'
import Label from './Label'
import Picker from 'react-mobile-picker'
import { TextColors } from 'src/utils/Colors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { StateRequest } from 'src/redux/features/baseReducer'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'

interface Params {
  value: string
  onChange: (value: string) => void
  height?: string
  options: string[]
}

const Select = ({ value, height = '17rem', options, onChange }: Params) => {
  const [opened, setOpened] = useState(false)

  // const [pickerValue, setPickerValue] = useState({
  //   options: value
  // })

  const heightStyle = useSpring({
    height: opened ? height : '0rem'
  })

  const list = useAppSelector(state => state.artistsReducer.data)
  const status = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!list && status === StateRequest.EMPTY) {
      dispatch(getArtistsData())
    }
  }, [status, list])

  if (!list) {
    return <></>
  }

  const pickerValue = { options: value }
  const selections = { options }

  return (
    <Label
      name='Artist*'
      value={value}
      icon={TextIcons.DOWN_TRIANGLE}
      onClick={() => setOpened(!opened)}
    >
      <animated.div
        className='bg-black flex flex-col items-end overflow-hidden'
        style={heightStyle}
      >
        <Picker
          value={pickerValue}
          onChange={picker => onChange(picker.options)}
          style={{ color: 'white' }}
        >
          {Object.keys(selections).map((key, i) => {
            const option = (selections as any)[key]
            return (
              <Picker.Column key={`option-${i}`} name={`option-${i}`}>
                <Picker.Item value={option}>
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
              </Picker.Column>
            )
          })}
        </Picker>
        <button className='mx-8 my-4'>
          <TitleSmall text='DONE' tag={TextTags.SPAN} />
        </button>
      </animated.div>
    </Label>
  )
}

export default Select
