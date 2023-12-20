'use client'

import { useAppSelector } from 'src/redux/hooks'
import FilterAlt from '../components/general/Filter/FilterAlt'
import Loading, { PageLoad } from '../components/general/Loading'
// import Loading from '../components/general/Loading'
import Content from './Content'

const About = () => {
  const status = useAppSelector(state => state.aboutReducer.status)
  return (
    <>
      <div className=''>
        <FilterAlt
          text={`ABOUT
          US`}
          className='bg-about-mobile'
        />
        <div className='pt-[200px] desk:pt-0 backdrop-blur-sm bg-white/10'>
          <Content />
        </div>
      </div>
      <Loading type={PageLoad.ABOUT} status={status} />
    </>
  )
}

export default About
