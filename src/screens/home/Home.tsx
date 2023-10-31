'use client'
import React, { useState, useEffect } from 'react';
import TitleHome from '../components/texts/TitleHome';
import AnimatedText from './AnimatedText';
import MenuSection from './MenuSection';
import MainHeader from './MainHeader';
import { animated, useSpring } from 'react-spring';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { getArtistsData } from 'src/redux/features/artistsSlice';
import { StateRequest } from 'src/redux/features/baseReducer';

const Home = () => {
  const artistsStatus = useAppSelector(state => state.artistsReducer.status);
const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');

  useEffect(() => {
    dispatch(getArtistsData());
  }, [dispatch]);

 useEffect(() => {
  const lastFetched = localStorage.getItem('lastArtistsFetchDate');
  const cachedData = localStorage.getItem('artistsData');
  const currentTime = new Date().getTime();

  // Si los datos están en localStorage y no han pasado 24 horas
  if (lastFetched && (currentTime - Number(lastFetched)) <= 24 * 60 * 60 * 1000 && cachedData) {
    setShowHomeContent(true);
    return; // Finalizamos el useEffect aquí
  } else {
    dispatch(getArtistsData());
  }

  let startTimestamp: number;
  const animationDuration = 2000;
  
  const animateCount = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsed = timestamp - startTimestamp;

    let progress = Math.min(elapsed / animationDuration, 1);
    progress = Math.sin((progress * Math.PI) / 2);

    const newCount = Math.floor(progress * 100);

    if (newCount < 99) {
      setCount(newCount);
      window.requestAnimationFrame(animateCount);
    } else if (artistsStatus === StateRequest.SUCCESS) {
      setCount(100);
      setShowHomeContent(true);
    } else {
      setCount(99);
    }
  };

  window.requestAnimationFrame(animateCount);
}, [dispatch, artistsStatus]);
  

  useEffect(() => {
    if (count === 99 && artistsStatus === StateRequest.SUCCESS) {
      setCount(100);
      setShowHomeContent(true);
    }
  }, [artistsStatus]);

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
          <MenuSection language={language} toggleLanguage={setLanguage} />
        </animated.div>
      )}
    </>
  );
}

export default Home;
