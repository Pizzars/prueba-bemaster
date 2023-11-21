'use client'
import React from 'react' // useEffect // useState,
import BasePage from 'src/screens/components/general/base/BasePage'
import Home from 'src/screens/home/Home'
// import Spline from '@splinetool/react-spline';
import './page.css'
import Cookies from 'src/screens/components/general/Cookies'

const HomePage = () => {
  // const [isSplineLoaded, setIsSplineLoaded] = useState(false)

  // const handleSplineLoad = () => {
  //   setIsSplineLoaded(true)
  // }

  return (
    <BasePage navbar={false} footer={true} className='relative flex flex-col min-h-screen'>
      {/* {!isSplineLoaded && (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-white'>
          Cargando...
        </div>
      )}
      <div className={`absolute inset-0 z-0 ${isSplineLoaded ? '' : 'hidden'}`}>
        <Spline
          scene='https://prod.spline.design/8MZRGCAOH9d0Kg0p/scene.splinecode'
          onLoad={handleSplineLoad}
        />
      </div> */}
      {/* {isSplineLoaded && ( */}
      <div className='flex-grow custom-gradient'>
        <>
          <Home />
          <Cookies />
        </>
      </div>
      {/* )} */}
    </BasePage>
  )
}

export default HomePage
