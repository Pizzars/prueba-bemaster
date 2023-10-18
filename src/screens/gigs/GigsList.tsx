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
            {gigs.map(gig => (
                <div key={gig.date} className="flex flex-col">
                    <section className={`flex flex-col mt-3`}>
                        <div className='flex flex-col mt-5'>
                            <TitleMedium text={gig.date} className='uppercase text-[24px]' />
                            <div className='ml-5 mt-2'>
                                <TitleMedium text={gig.artist} className='uppercase text-[24px]' />
                                <TextParagraph text={gig.venue} className='mt-1 opacity-40' />
                                <TextParagraph text={gig.location} className='opacity-40' />
                            </div>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default GigsList;
