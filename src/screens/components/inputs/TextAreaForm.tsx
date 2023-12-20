import React, { useState } from 'react'
import Label from './Label'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'
import useWindowSize from 'src/hooks/useWindowSize'

interface Params {
  value?: string
  label: string
  onChange: (value: string) => void
  height?: number
  button?: boolean
}

const TextAreaForm = ({ value, height = 12, onChange, label, button = true }: Params) => {
  const [opened, setOpened] = useState(false)

  const size = useWindowSize().width ?? 0

  const heightAnimation = useSpring({
    height: opened || size > 1023 ? `${height}rem` : '0rem',
    padding: opened || size > 1023 ? `2rem 2rem` : '0rem 2rem'
  })

  return (
    <Label name={label} onClick={() => setOpened(!opened)}>
      <animated.div
        className='bg-black flex flex-col items-end overflow-hidden'
        style={heightAnimation}
      >
        <textarea
          className='w-full text-white bg-transparent font-light resize-none outline-none'
          value={value ?? ''}
          style={{ height: `${height - 4}rem` }}
          onChange={e => onChange(e.target.value)}
          placeholder='You can write here.'
        ></textarea>
        {button && (
          <button className='mt-4' onClick={() => setOpened(false)}>
            <TitleSmall text='DONE' tag={TextTags.SPAN} />
          </button>
        )}
      </animated.div>
    </Label>
  )
}

export default TextAreaForm
