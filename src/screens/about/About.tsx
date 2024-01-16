'use client'

import { useAppSelector } from 'src/redux/hooks'
import FilterAlt from '../components/general/Filter/FilterAlt'
import Load from '../components/general/Load'
import { PageLoad } from '../components/general/Loading'
// import Loading from '../components/general/Loading'
import Content from './Content'

const About = () => {
  const status = useAppSelector(state => state.aboutReducer.status)
  return (
    <>
      <div className='bg-white desk:bg-transparent'>
        <FilterAlt
          text={`ABOUT
          US`}
          className='bg-about-mobile'
        />
        <div className='pt-[200px] desk:pt-0 bg-white desk:backdrop-blur-sm desk:bg-white/10'>
          <Content />
        </div>
      </div>
      {/* <Loading type={PageLoad.ABOUT} status={status} /> */}
      <Load type={PageLoad.ABOUT} status={status} />
    </>
  )
}

export default About
