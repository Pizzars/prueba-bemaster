import { useEffect, useState } from 'react'
import TitleHome from 'src/screens/components/texts/TitleHome'
import { TextColors } from 'src/utils/Colors'
import { useParams } from 'next/navigation'
import { optionsHome } from 'src/screens/home/components/optionList'

const ContentTitle = () => {
  const [classText, setClassText] = useState<string>('text-big leading-big')
  // const load = useAppSelector(state => state.loadReducer.artists)
  // const artist = useAppSelector(state => state.artistsReducer.artist)

  const { id } = useParams()
  const data = optionsHome.find(op => op.id == id)

  if (!data) return <></>

  useEffect(() => {
    // if (load) {
    setClassText('text-big leading-big duration-0')
    setTimeout(() => {
      setClassText(
        'desk:text-[24px] desk:leading-[21.6px] big:text-[48px] big:leading-[43.2px] duration-500'
      )
    }, 1000)
    // }
  }, [])

  if (!data) return <></>

  return (
    <div className='flex justify-between px-20 py-8'>
      <TitleHome
        text={data.name}
        color={TextColors.white}
        className={`${classText} transition-all duration-500 uppercase`}
        // className=' transition-all  duration-500'
      />
    </div>
  )
}

export default ContentTitle
