import { TextColors } from 'src/utils/Colors'
import TitleHome from '../../texts/TitleHome'
import TitleSmall from '../../texts/TitleSmall'
import OptionsFilter from './OptionsFilter'

interface Params {
  text: string
  alt?: string
  options?: Array<{ title: string; option: string }>
  className?: string
  //   handleTabClick?: (option:any) => void
}

const FilterAlt = ({ text, alt, options, className = '' }: Params) => {
  return (
    <div
      className={`fixed w-full px-6 z-10 desk:px-16 desk:pt-8 desk:pb-16 desk:static big:p-24 big:pt-16 ${className}`}
    >
      {options && <OptionsFilter options={options} />}
      <div className='py-8 desk:pb-0'>
        {alt && <TitleSmall text={alt} color={TextColors.white} />}
        <TitleHome className='text-larger2' text={text} color={TextColors.white} />
      </div>
    </div>
  )
}

export default FilterAlt
