import React from 'react'
import LogoIcon from 'src/screens/components/icons/LogoIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

const FooterHeader = () => {
    return (
        <section className='flex w-full bg-white items-center px-10 pt-12 pb-10'>
            <div className='flex flex-column w-full flex-col items-start'>
                <div className='mb-8'>
                    <LogoIcon size='24' />
                </div>
                <div>
                    <TitleSmall text={`BE FOR THE MUSIC.`} className='desk:text-[24px] desk:leading-[28.8px]'/>
                    <TitleSmall text={`BE FOR THE BOOKING.`} className='desk:text-[24px] desk:leading-[28.8px]'/>
                </div>
            </div>
        </section>
    )
}

export default FooterHeader