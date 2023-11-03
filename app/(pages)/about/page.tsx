import About from 'src/screens/about/About'
import BasePage from 'src/screens/components/general/base/BasePage'

const AboutPage = () => {
  return (
    <BasePage className='bg-about' title='About Us'>
      <About />
    </BasePage>
  )
}

export default AboutPage
