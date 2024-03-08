'use client'
import { useState } from 'react'
import logo from '../../assets/general/white_logo.png'
import { AuthRequest, signIn } from 'src/proxy/FirebaseAuth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [load, setLoad] = useState(false)

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black-app'>
      <form
        onSubmit={async e => {
          e.preventDefault()
          setError(null)
          setLoad(true)
          const rs = await signIn({ email, pass })
          setLoad(false)
          if (rs === AuthRequest.ERROR) {
            setError('Usuario o contraseña incorrectos')
          }
        }}
        className=' w-full h-full flex flex-col justify-center items-center '
      >
        <div className='h-[7rem] mb-4'>
          <img src={logo.src} alt='' className='w-full h-full object-contain' />
        </div>
        <label className='flex flex-col text-white items-center'>
          <span className='text-yellow-app'>Correo</span>
          <input
            className='text-black px-2 py-1 rounded-lg w-[15rem] text-center'
            type='email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className='flex flex-col text-white mt-4 items-center'>
          <span className='text-yellow-app'>Contraseña</span>
          <input
            className='text-black px-2 py-1 rounded-lg w-[15rem] text-center'
            type='password'
            value={pass}
            required
            onChange={e => setPass(e.target.value)}
          />
        </label>
        {error && <div className='my-2 text-red-400'>{error}</div>}
        <button
          type='submit'
          className={`${
            load ? 'bg-white' : 'bg-yellow-app'
          } text-black my-4 flex justify-center items-center w-[15rem] px-4 py-2 rounded-lg`}
        >
          {load ? 'Verificando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  )
}

export default Login
