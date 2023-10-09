import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import TitleSection from '../components/texts/TitleSection';
import { TextColors } from 'src/utils/Colors';
import './styles.css';
import TextIcon, { SizeIcons, TextIcons } from '../components/icons/TextIcon';

const carouselTexts = ['WORLDWIDE', 'FOR EUROPE', 'FOR SPAIN', 'LATIN AMERICA', 'SPAIN & LATAM'];

export const artists = [
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

const AnimatedText = () => {

    const [index, setIndex] = useState(0);

    const props = useSpring({
        transform: `translateX(-${index * 100}%)`,
        from: { transform: `translateX(-${index * 100}%)` },
        config: { tension: 220, friction: 120 }
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            <div className="animated-text z-10">
                {artists.map((artist: string, index: React.Key | null | undefined) => (
                    <TitleSection key={index} text={artist.toUpperCase()} color={TextColors.gray} className='mb-2' />
                ))}
            </div>
            <div className="animated-text animated-text-delayed z-10">
                {artists.map((artist: string, index: any) => (
                    <TitleSection key={index + artists.length} text={artist.toUpperCase()} color={TextColors.gray} className='mb-2' />
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20" />
            <div className="absolute bottom-0 z-30 text-white pl-4">
                <div className='flex flex-row'>
                    <TitleSection text={`ARTISTS`} color={TextColors.white} />
                    <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.white} />
                </div>
                <div className="overflow-hidden" style={{ width: '100%' }}>
                    <animated.div style={props} className="flex transition-all duration-500">
                        {carouselTexts.map((text, i) => (
                            <div key={i} className="flex-shrink-0" style={{ whiteSpace: 'nowrap', minWidth: '100%' }}>
                                <TitleSection text={text} color={TextColors.white} />
                            </div>
                        ))}
                    </animated.div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedText;
