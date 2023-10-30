import Content from './Content'
import Filter from './Filter'

const About = () => {
  return (
    <div className='bg-about'>
      <Filter />
      <div className='pt-[200px] desk:pt-0 backdrop-blur-sm bg-white/10'>
        <Content />
      </div>
    </div>
  )
}

export default About
