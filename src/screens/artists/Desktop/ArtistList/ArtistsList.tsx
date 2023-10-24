'use client'
import React from 'react';
import TitleMedium from 'src/screens/components/texts/TitleMedium';
import { TextColors } from 'src/utils/Colors';
import styles from './ArtistsList.module.css';

const ArtistList = () => {
    const [selectedArtist, setSelectedArtist] = React.useState(false);

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

        return (
            <div className={`relative h-screen ${styles.artistListContainer} text-center`} style={{
                flexBasis: "28.125%"
            }}>
                <div className={`overflow-y-scroll h-full ${styles.scrollContainer}`}>
                    <div className="flex items-center justify-center h-full">
                        <ul className="space-y-2 p-4 text-left">
                            {artists.map((artist: string, index: number) => (
                                <li key={index}>
                                    <TitleMedium 
                                        text={artist} 
                                        color={TextColors.white} 
                                        className={`opacity-40 hover:opacity-100`} 
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        
                <div className={`${styles.mask} ${styles.maskTop}`}></div>
                <div className={`${styles.mask} ${styles.maskBottom}`}></div>
            </div>
        );
        
}

export default ArtistList