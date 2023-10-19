import React from 'react'
import LogoIcon from 'src/screens/components/icons/LogoIcon'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

const FooterHeader = () => {
    return (
        <section className='flex w-full bg-white items-center px-4'>
            <div className='my-8 flex flex-column w-full flex-col items-start'>
                <div className='mb-8'>
                    <LogoIcon size='22' />
                </div>
                <div className='mb-8'>
                    <TitleSmall text={`BE FOR THE MUSIC.`} />
                    <TitleSmall text={`BE FOR THE BOOKING.`} />
                </div>
            </div>
        </section>
    )
}

export default FooterHeader