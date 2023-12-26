import { useEffect, useState } from 'react'
import { useAppSelector } from 'src/redux/hooks'
import { TextColors } from 'src/utils/Colors'
import OptionsFilter, { optionColors } from '../components/general/Filter/OptionsFilter'
import TitleHome from '../components/texts/TitleHome'

interface Params {
  select: (option: string) => void
}

const HeadGigs = ({ select }: Params) => {
  const weeks = useAppSelector(state => state.eventsReducer.weeks)

  const [big, setBig] = useState(true)
  useEffect(() => {
    window.onscroll = () => {
      const container = document.getElementById('list-container')
      const head = document.getElementById('head-gigs')
      if (container && head) {
        const top = head.offsetHeight - container.getBoundingClientRect().top

        if (top < 40 && !big) {
          setBig(true)
        } else {
          if (big) {
            setBig(false)
          }
        }
      }
    }
  }, [big])

  return (
    <div id='head-gigs' className='bg-gigs-mobile desk:relative sticky top-0 w-full z-10 pt-[72px]'>
      <div className='mx-8 desk:mx-20 pt-8 '>
        <TitleHome
          text='GIGS'
          color={TextColors.white}
          className={`transition-all duration-500 ${
            big ? 'text-larger leading-larger' : 'text-big leading-big'
          }`}
        />
      </div>
      {weeks.length && (
        <div className='mx-4 desk:mx-16 desk:mt-4 px-2 flex justify-start'>
          <OptionsFilter
            options={weeks}
            // options={weeks}
            color={optionColors.white}
            onChage={select}
            className='desk:text-small desk:leading-small big:text-small big:leading-small'
            step={72}
          />
        </div>
      )}
    </div>
  )
}

export default HeadGigs
