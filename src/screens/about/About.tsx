import FilterAlt from '../components/general/Filter/FilterAlt'
import Content from './Content'

const About = () => {
  return (
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
  )
}

export default About
