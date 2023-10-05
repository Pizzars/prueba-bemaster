'use client'
import React, { useState, useEffect } from 'react';
import TitleHome from '../components/texts/TitleHome';
import AnimatedText from './AnimatedText';
import Footer from '../components/general/Footer';
import SocialMediaLinks from '../components/general/SocialMediaLinks';
import MenuSection from './MenuSection';
import MainHeader from './MainHeader';
import { animated, useSpring } from 'react-spring';

const Home = () => {
  const [count, setCount] = useState(0);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2000; // Duración de la animación en milisegundos

    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      // Calcular el progreso de la animación como un valor entre 0 y 1
      let progress = Math.min(elapsed / duration, 1);

      // Aplicar una función de easing para acelerar progresivamente
      progress = Math.sin((progress * Math.PI) / 2); // Easing out sine

      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        window.requestAnimationFrame(animateCount);
      } else {
        setShowHomeContent(true);
      }
    };

    window.requestAnimationFrame(animateCount);
  }, []);

  const props = useSpring({
    opacity: showHomeContent ? 1 : 0,
    transform: showHomeContent ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });


  return (
    <>
      {!showHomeContent ? (
        <div className="h-screen bg-gray-100 flex items-end">
          <TitleHome text={count.toString()} className='ml-10 mb-8' />
        </div>
      ) : (
        <animated.div style={props}>
          <MainHeader />
          <div className="h-screen flex-1 items-center justify-center">
            <AnimatedText />
          </div>
          <MenuSection language={'EN'} toggleLanguage={setLanguage} />
          <SocialMediaLinks />
          <Footer />
        </animated.div>
      )}
    </>
  );
}

export default Home;
