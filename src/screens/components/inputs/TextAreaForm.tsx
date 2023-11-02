import React, { useState } from 'react'
import Label from './Label'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { useSpring, animated } from 'react-spring'

interface Params {
  value?: string
  onChange: (value: string) => void
  height?: number
}

const TextAreaForm = ({ value, height = 12, onChange }: Params) => {
  const [opened, setOpened] = useState(false)

  const heightAnimation = useSpring({
    height: opened ? `${height}rem` : '0rem',
    padding: opened ? `2rem 2rem` : '0rem 2rem'
  })

  return (
    <Label name='ADDITIONAL INFORMATION' onClick={() => setOpened(!opened)}>
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
        <button className='mt-4' onClick={() => setOpened(false)}>
          <TitleSmall text='DONE' tag={TextTags.SPAN} />
        </button>
      </animated.div>
    </Label>
  )
}

export default TextAreaForm
