'use client'
import { useEffect } from 'react'
import Cursor from '../Cursor'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { AuthStatus, authVerification } from 'src/proxy/FirebaseAuth'
import { setAuthState, setError, setListen } from 'src/redux/features/dataSlice'
import { usePathname, useRouter } from 'next/navigation'
import Load from '../Load'
import imageError from '../../../../assets/general/error.jpeg'
import TitleMedium from '../../texts/TitleMedium'
import Link from 'next/link'

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
  const { auth, load, error } = useAppSelector(state => state.dataReducer)
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
        {error && (
          <div className='bg-black-app w-full h-full z-50 fixed top-0 left-0'>
            <div className=' w-full h-full grayscale'>
              <img src={imageError.src} alt='error' className=' w-full h-full object-cover' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
              <div className='flex flex-col bg-yellow-app items-center justify-center p-4'>
                <TitleMedium text={'No hemos encontrado lo que buscas'} />
              </div>
              <Link
                href='/'
                className='bg-black text-white opacity-90 hover:opacity-100 hover:bg-yellow-app hover:text-black rounded-lg px-4 py-2 my-8 uppercase'
                onClick={() => {
                  dispatch(setError(false))
                }}
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        )}
      </body>
    </>
  )
}

export default BasePage
