'use client'
import React from 'react';
import TitleMedium from '../components/texts/TitleMedium';
import TextParagraph from '../components/texts/TextParagraph';

const gigs = [
    {
        "date": "11-08-23",
        "artist": "Shermanology",
        "venue": "Social Club Mallorca",
        "location": "Palma, España"
    },
    {
        "date": "11-08-23",
        "artist": "LOCO DICE",
        "venue": "Olivia Valère",
        "location": "Marbella, España"
    },
    {
        "date": "12-08-23",
        "artist": "Melanie Ribbe",
        "venue": "Greenworld Tenerife, Amarilla World",
        "location": "San Miguel de Abona, Tenerife, España"
    },
    {
        "date": "12-08-23",
        "artist": "BASTIAN BUX",
        "venue": "Social Club Mallorca",
        "location": "Palma, España"
    },
    {
        "date": "12-08-23",
        "artist": "SARA DE ARAÚJO",
        "venue": "Social Club Mallorca",
        "location": "Palma, España"
    }
]

const GigsList: React.FC = () => {
    return (
        <div className='flex flex-col w-full pl-6 pr-6 space-y-5' style={{ paddingTop: 200 }}>
            <div className="flex flex-wrap -mx-2"> {/* Wrap the gigs and use flex-wrap */}
                {gigs.map(gig => (
                    <div key={gig.date} className="w-full desk:w-1/2 p-2">
                        <div className="flex flex-col p-3 ">
                            <section className={`flex flex-col mt-3`}>
                                <div className='flex flex-col mt-5'>
                                    <TitleMedium text={gig.date} className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white' />
                                    <div className='ml-5 mt-2'>
                                        <TitleMedium text={gig.artist} className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white' />
                                        <TextParagraph text={gig.venue} className='mt-1 opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white' />
                                        <TextParagraph text={gig.location} className='opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white' />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GigsList;
