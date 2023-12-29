import BasePage from 'src/screens/components/general/base/BasePage'
import Policy from 'src/screens/policy/Policy'

const AboutPage = () => {
  return (
    <BasePage className='bg-about' title='Polici Privacy'>
      <Policy />
    </BasePage>
  )
}

export default AboutPage
