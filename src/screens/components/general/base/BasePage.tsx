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
  paddingMobile?: boolean
}

const BasePage = ({
  title = 'Taekwondo',
  description = 'Datos del taekwondo',
  className = '',
  footer = true,
  navbar = true,
  padding = true,
  paddingMobile = true,
  children
}: Params) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </head>
      <body
        className={`${navbar && paddingMobile ? 'pt-16' : 'pt-0'} ${
          navbar && padding ? 'pt-16 big:pt-24' : 'desk:pt-0'
        } ${className}`}
        // style={{ paddingTop: navbar && padding ? 72 : 0 }}
      >
        {navbar && <Navbar />}
        {children}
        {footer && <Footer />}
        <Cursor />
      </body>
    </>
  )
}

export default BasePage
