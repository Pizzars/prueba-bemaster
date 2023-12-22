import BasePage from 'src/screens/components/general/base/BasePage'
import Gigs from 'src/screens/gigs/Gigs'

export default function GigsPage() {
  return (
    <BasePage title='Gigs' className='bg-gigs' padding={false}>
      <Gigs />
    </BasePage>
  )
}
