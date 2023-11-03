'use client'
import React, { useState, useEffect } from 'react';
import BasePage from 'src/screens/components/general/base/BasePage';
import Home from 'src/screens/home/Home';
import Spline from '@splinetool/react-spline';
import './page.css';

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <BasePage navbar={false} footer={true} className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/8MZRGCAOH9d0Kg0p/scene.splinecode" />
      </div>
      <main className="flex-grow">
        <Home />
      </main>
    </BasePage>
  );
}

export default HomePage;
