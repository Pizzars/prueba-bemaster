import { useEffect, useRef, useState } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import TextIcon, { TextIcons } from 'src/screens/components/icons/TextIcon'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import { useSpring, animated } from 'react-spring'
import ArtistDetailsMobile from './ArtistDetails/ArtistDetailsMobile'

interface Params {
  artist: ArtistModel
}

const ArtistItem = ({ artist }: Params) => {
  const [open, setOpen] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  const contentRef = useRef(null)

  const props = useSpring({
    height: open > 1 ? contentHeight : 0,
    opacity: open > 1 ? 1 : 0,
    reset: true
  })

  useEffect(() => {
    if (open && contentRef.current) {
      setContentHeight((contentRef.current as any).scrollHeight)
    }
  }, [open, contentRef])

  return (
    <div className={`item-list flex flex-col py-4 ${open ? 'item-open' : ''}`}>
      <div
        onClick={() => {
          if (open === 0) {
            setOpen(2)
          }
          if (open === 2) {
            setOpen(1)
            setTimeout(() => {
              setOpen(0)
            }, 300)
          }
        }}
        className='flex flex-row justify-between items-center'
      >
        <TitleMedium text={artist.name} className='uppercase' />
        <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
      </div>

      {open && (
        <animated.div style={props} className='overflow-hidden'>
          <div ref={contentRef}>
            <ArtistDetailsMobile />
          </div>
        </animated.div>
      )}
    </div>
  )
}

export default ArtistItem
