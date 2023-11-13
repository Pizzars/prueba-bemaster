'use client'
import React from 'react';
import TitleMedium from '../components/texts/TitleMedium';
import TextParagraph from '../components/texts/TextParagraph';
import { useAppSelector } from 'src/redux/hooks';
import { gigsFallbackMessages, noEventsMessage } from 'src/utils/consts';
import { FormattedGig } from 'src/utils/types';

interface GigsListProps {
    gigs: FormattedGig[] | [];
}
const GigsList: React.FC<GigsListProps> = ({ gigs }) => {
    const currentLanguage = useAppSelector((state) => state.languageReducer.language);

    return (
        <div className='backdrop-blur-sm bg-white/10 flex flex-col w-full px-6 space-y-2 desk:my-12 md:space-y-5' style={{ paddingTop: 200 }}>
            <div className="flex flex-wrap -mx-2">
                {gigs.length > 0 ? gigs.map(gig => (
                    <div key={gig.id} className="w-full desk:w-1/2 desk:p-2">
                        <div className="flex flex-col p-3 ">
                            <section className={`flex flex-col`}>
                                <div className='flex flex-col mt-5'>
                                    <TitleMedium text={gig.date} className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white' />
                                    <div className='ml-5 mt-2'>
                                        <TitleMedium text={gig.artist || gigsFallbackMessages.artist[currentLanguage]} className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white' />
                                        <TextParagraph text={gig.venue || gigsFallbackMessages.venue[currentLanguage]} className='mt-1 opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white' />
                                        <TextParagraph text={gig.location || gigsFallbackMessages.location[currentLanguage]} className='opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white' />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )) : (
                    <TitleMedium text={noEventsMessage[currentLanguage]} className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white text-center w-full mt-10 p-20' />

                )}
            </div>
        </div>
    );
};


export default GigsList;
