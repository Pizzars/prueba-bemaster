import gif from '../../../assets/general/gif-load.gif'

const Load = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full h-full bg-yellow-app flex justify-center items-center'>
      <img src={gif.src} alt='load' className='w-[20rem] max-w-full px-4' />
    </div>
  )
}

export default Load
