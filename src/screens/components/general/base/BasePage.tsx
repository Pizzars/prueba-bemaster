'use client'
import { useEffect } from 'react'
import Cursor from '../Cursor'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { AuthStatus, authVerification } from 'src/proxy/FirebaseAuth'
import { setAuthState, setListen } from 'src/redux/features/dataSlice'
import { usePathname, useRouter } from 'next/navigation'
import Load from '../Load'

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
  const auth = useAppSelector(state => state.dataReducer.auth)
  const load = useAppSelector(state => state.dataReducer.load)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (auth === AuthStatus.NO_VERIFIED) {
      dispatch(setListen(true))
      authVerification(status => {
        dispatch(setAuthState(status))
      })
    }
    if (auth === AuthStatus.LOGGED && pathname === '/login') {
      router.push('/')
    }
    if (auth === AuthStatus.NO_USER && pathname !== '/login') {
      router.push('/login')
    }
  }, [auth])

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
        {(auth == AuthStatus.NO_VERIFIED || load) && <Load />}
      </body>
    </>
  )
}

export default BasePage
