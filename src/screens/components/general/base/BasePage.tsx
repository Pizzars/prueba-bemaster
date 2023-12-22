import Cursor from '../Cursor'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'

interface Params {
  title?: string
  description?: string
  className?: string
  children: any
  footer?: boolean
  navbar?: boolean
  padding?: boolean
}

const BasePage = ({
  title = 'B4Bookings',
  description = 'B4Bookings page',
  className = '',
  footer = true,
  navbar = true,
  padding = true,
  children
}: Params) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </head>
      <body className={className} style={{ paddingTop: navbar && padding ? 72 : 0 }}>
        {navbar && <Navbar />}
        {children}
        {footer && <Footer />}
        <Cursor />
      </body>
    </>
  )
}

export default BasePage
