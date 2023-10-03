'use client'

import React, { useState, useEffect } from 'react';
import TitleSection from '../components/texts/TitleSection';
import TitleHome from '../components/texts/TitleHome';
import TitleSmall from '../components/texts/TitleSmall';
import TextIcon, { TextIcons } from '../components/icons/TextIcon';
import { TextColors } from 'src/utils/Colors';
import AnimatedText from './AnimatedText';

const Home = () => {
  const [count, setCount] = useState(0);
  const [showHomeContent, setShowHomeContent] = useState(false);

  const artists = [
    'DAFT PUNK',
    'THE CHEMICAL BROTHERS',
    'DEADMAU5',
    'AVICII',
    'SKRILLEX',
    'CALVIN HARRIS',
    'TIËSTO',
    'ARMIN VAN BUUREN',
    'DAVID GUETTA',
    'ZEDD',
    'DIPLO',
    'MARSHMELLO',
    'MARTIN GARRIX',
    'KYGO',
    'ALESSO',
    'AFROJACK',
    'STEVE AOKI',
    'HARDWELL',
    'KASKADE',
    'BASSNECTAR',
    'MOBY',
    'FATBOY SLIM',
    'CARL COX',
    'ERIC PRYDZ',
    'ABOVE & BEYOND',
    'PORTER ROBINSON',
    'DISCLOSURE',
    'FLUME',
    'AXWELL Λ INGROSSO',
    'SWEDISH HOUSE MAFIA',
    'ODESZA',
    'DJ SNAKE',
    'MAJOR LAZER',
    'ALISON WONDERLAND',
    'DILLON FRANCIS',
    'RL GRIME',
    'ILLENIUM',
    'MADEON',
    'ZHU',
    'GESAFFELSTEIN',
    'JUSTICE',
    'BOYS NOIZE',
    'THE PRODIGY',
    'UNDERWORLD',
    'ORBITAL',
    'APHEX TWIN',
    'FOUR TET',
    'RICHIE HAWTIN',
    'JAMIE XX',
    'THE CRYSTAL METHOD',
    'PAUL VAN DYK',
    'PAUL OAKENFOLD',
    'BT',
    'ATB',
    'OLIVER HELDENS',
    'DON DIABLO',
    'DUKE DUMONT',
    'GALANTIS',
    'CASHMERE CAT',
    'THE CHAINSMOKERS',
    'LOUIS THE CHILD',
    'GRYFFIN',
    'RÜFÜS DU SOL',
    'BONOBO',
    'JON HOPKINS',
    'NICOLAS JAAR',
    'FLYING LOTUS',
    'TYCHO',
    'SQUAREPUSHER',
    'AUTECHRE',
    'BOARDS OF CANADA',
    'BURIAL',
    'JLIN',
    'NINA KRAVIZ',
    'CHARLOTTE DE WITTE',
    'AMELIE LENS',
    'PEGGY GOU',
    'TALE OF US',
    'SOLOMUN',
    'ADAM BEYER',
    'BORIS BREJCHA',
    'BEN KLOCK',
    'MARCEL DETTMANN',
    'CHRIS LIEBING',
    'SVEN VÄTH',
    'RICARDO VILLALOBOS',
    'JEFF MILLS',
    'LAURENT GARNIER',
    'JOHN DIGWEED',
    'SASHA',
    'HERNAN CATTANEO',
    'JAMES ZABIELA',
    'EATS EVERYTHING',
    'HOT SINCE 82',
    'JORIS VOORN',]

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
        setShowHomeContent(true); // Mostrar el contenido del home cuando la animación se complete
      }
    };

    window.requestAnimationFrame(animateCount);
  }, []);

  return (
    <>
      {!showHomeContent ? (
        <div className="h-screen bg-gray-100 flex items-end">
          <TitleHome text={count.toString()} className='ml-10 mb-8' />
        </div>
      ) : (
        <div>
          <div className="h-screen bg-red-500 flex flex-col justify-between pl-10">
            <div className="mt-auto mb-auto">
              <TitleSmall text='b4bookings' className='text-white' />
              <TitleHome text='BE FOR' className='text-white' />
              <TitleHome text='THE' className='text-white ml-8' />
              <TitleHome text='BOOKING' className='text-white ml-3' />
            </div>

            <div className="flex flex-row items-center self-start mb-4">
              <TextIcon icon={TextIcons.DOWN_TRIANGLE} color={TextColors.white} />
              <TitleSmall text={`Artists`} color={TextColors.white} className='ml-1' />
            </div>
          </div>
          <div className="h-screen flex-1 items-center justify-center">
            <AnimatedText artists={artists} />
          </div>
          <div className="h-screen bg-blue-500 flex items-center justify-center">
            <TitleSection text='CONTENIDO DEL TERCER TERCIO' />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
