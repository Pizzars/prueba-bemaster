import { TextColors } from 'src/utils/Colors'
import TitleHome from '../components/texts/TitleHome'

const Filter = () => {
  return (
    <div
      className='bg-about-mobile fixed w-full pl-8 z-10 desk:px-16 desk:pt-8 desk:pb-16 desk:static big:p-24 big:pt-16'
      style={{}}
    >
      <div className='py-8 desk:pb-0'>
        <TitleHome
          text={`ABOUT
          US`}
          color={TextColors.white}
        />
      </div>
    </div>
  )
}

export default Filter
