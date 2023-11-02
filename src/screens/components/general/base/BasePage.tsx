import Head from 'next/head'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'

interface Params {
  title?: string
  description?: string
  className?: string
  children: any
  footer?: boolean
  navbar?: boolean
}

const BasePage = ({
  title = 'B4Bookings',
  description = 'B4Bookings page',
  className = '',
  footer = true,
  navbar = true,
  children
}: Params) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className={className} style={{ paddingTop: navbar ? 72 : 0 }}>
        {navbar && <Navbar />}
        {children}
        {footer && <Footer />}
      </div>
    </>
  )
}

export default BasePage
