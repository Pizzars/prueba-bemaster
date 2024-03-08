import React from 'react'
import { OptionHome } from './optionList'
import { TextColors } from 'src/utils/Colors'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import Link from 'next/link'

interface Params {
  option: OptionHome
}

const CardHome = ({ option }: Params) => {
  return (
    <Link
      href={`/${option.id}`}
      className={`h-[30vh] desk:h-full ${option} cursor-pointer transition-all delay-200 w-full desk:w-[20%] desk:hover:w-[40%] relative option-home block`}
    >
      <img src={option.image} className='w-full h-full object-cover' alt='' />
      <div className='absolute top-0 left-0 text-white swis w-full h-full px-4 text-center flex flex-col justify-end py-12 bg-gradient-to-b from-transparent via-black/10 to-black'>
        <div className='w-[15rem] max-w-full mx-auto'>
          <TitleSmall text={option.name} color={TextColors.white} className='uppercase' />
        </div>
      </div>
    </Link>
  )
}

export default CardHome
