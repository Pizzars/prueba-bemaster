'use client'
import Home from 'src/screens/home/Home'
import './page.css'
import Footer from 'src/screens/components/general/Footer/Footer'
import Spline from '@splinetool/react-spline'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ position: 'relative',}}>
      {isMounted && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
          <Spline scene="https://prod.spline.design/8MZRGCAOH9d0Kg0p/scene.splinecode" />
        </div>
      )}
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage
