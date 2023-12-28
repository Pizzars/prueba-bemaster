import Slider from 'react-slick'
import { TextColors } from 'src/utils/Colors'
import TextIcon, { TextIcons } from '../components/icons/TextIcon'
import TitleHome from '../components/texts/TitleHome'
import TitleSmall from '../components/texts/TitleSmall'
import Link from 'next/link'
import { animated, useSpring } from 'react-spring'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useAppSelector } from 'src/redux/hooks'
import { homeTexts } from './components/textsHome'
import { useEffect, useState } from 'react'
import Navbar from '../components/general/Navbar'
import Cookies from '../components/general/Cookies'

const MainHeader = () => {
  const load = useAppSelector(state => state.loadReducer.home)
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const [show, setShow] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false
  }

  // <<<<<<< HEAD
  useEffect(() => {
    if (load && show < 3) {
      if (show < 1) {
        setTimeout(() => {
          setShow(1)
          setTimeout(() => {
            setShow(2)
            setTimeout(() => {
              setShow(3)
            }, 2500)
          }, 500)
        }, 250)
      }
    }
  }, [load, show])

  const props = useSpring({
    opacity: show > 0 ? 1 : 0,
    transform: show > 0 ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  })

  const propsCarousel = useSpring({
    opacity: show > 1 ? 1 : 0,
    transform: show > 1 ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  })
  const propsMenu = useSpring({
    opacity: show > 2 ? 1 : 0,
    transform: show > 2 ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  })

  return (
    <>
      <header className='h-home backdrop-blur-sm flex flex-col justify-between relative'>
        <animated.div style={props} className='h-full pl-10 pt-48 desk:pl-20 desk:pt-24'>
          <div className='mt-auto mb-auto'>
            <TitleSmall text='b4bookings' className='text-white max-w-max uppercase' />
            <TitleHome
              text={homeTexts.textBeFor[currentLanguage]}
              className='text-white max-w-max uppercase'
            />
            <TitleHome
              text={homeTexts.textThe[currentLanguage]}
              className='text-white max-w-max uppercase ml-[1.2rem] desk:ml-[3.9vw] big:ml-[5rem]'
            />

            <animated.div
              style={propsCarousel}
              className='topbar_text_slider ml-[1.2rem] desk:ml-[3.9vw] big:ml-[5rem]'
            >
              <Slider {...settings}>
                <div>
                  <TitleHome
                    text={homeTexts.textBooking[currentLanguage]}
                    className='text-white uppercase'
                  />
                </div>
                <div>
                  <TitleHome
                    text={homeTexts.textMusic[currentLanguage]}
                    className='text-white uppercase'
                  />
                </div>
              </Slider>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className='desk:hidden pl-10' style={propsMenu}>
          <Link href='/artists' className='flex flex-row items-center self-start mb-4'>
            <TextIcon icon={TextIcons.DOWN_TRIANGLE} color={TextColors.white} />
            <TitleSmall text={`Artists`} color={TextColors.white} className='ml-1' />
          </Link>
        </animated.div>
      </header>
      <animated.div
        style={propsMenu}
        id='secret-nav'
        className='sticky top-0 left-0 z-50 hidden desk:block h-[72px] w-full '
      >
        <Navbar />
      </animated.div>
      <animated.div style={propsMenu} className='fixed bottom-0 right-0 z-50'>
        <Cookies />
      </animated.div>
    </>
  )
}

export default MainHeader
