import BasePage from 'src/screens/components/general/base/BasePage'
import Home from 'src/screens/home/Home'
import './page.css'

export default function HomePage() {
  return (
    <BasePage navbar={false}>
      <Home />
    </BasePage>
  )
}
