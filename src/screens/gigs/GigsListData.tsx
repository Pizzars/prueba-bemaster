import React from 'react'
import { EventModel } from 'src/proxy/queries/events/eventModel'
import { useAppSelector } from 'src/redux/hooks'
import { gigsFallbackMessages, noEventsMessage } from 'src/utils/consts'
import { addZero } from 'src/utils/functions'
import TextParagraph from '../components/texts/TextParagraph'
import TitleMedium from '../components/texts/TitleMedium'

interface Params {
  gigs: EventModel[]
}
const GigsListData = ({ gigs }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  return (
    <div className='dsk:backdrop-blur-sm desk:bg-white/10 flex flex-col w-full p-8 desk:p-16 space-y-2 desk:my-12 md:space-y-5'>
      <div className='flex flex-wrap'>
        {gigs.length ? (
          gigs.map((gig, i) => {
            return (
              <div key={`gig-${i}`} className='w-full desk:w-1/2 desk:p-2'>
                <div className='flex flex-col p-3 '>
                  <section className={`flex flex-col`}>
                    <div className='flex flex-col mt-5'>
                      <TitleMedium
                        text={`${addZero(gig.date.day)}.${addZero(gig.date.month)}.${
                          gig.date.year - 2000
                        }`}
                        className='uppercase  desk:text-white'
                      />
                      <div className='ml-5 mt-2'>
                        <TitleMedium
                          text={gig.artist.name || gigsFallbackMessages.artist[currentLanguage]}
                          className='uppercase desk:text-white'
                        />
                        <TextParagraph
                          text={gig.venue.name || gigsFallbackMessages.venue[currentLanguage]}
                          className='mt-1 opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white'
                        />
                        <TextParagraph
                          text={
                            gig.venue.city || gig.venue.country
                              ? `${gig.venue.city ? `${gig.venue.city}, ` : ''}${gig.venue.country}`
                              : gigsFallbackMessages.location[currentLanguage]
                          }
                          className='opacity-40 desk:text-[21px] desk:leading-[23.1px] desk:text-white z-0'
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )
          })
        ) : (
          <TitleMedium
            text={noEventsMessage[currentLanguage]}
            className='uppercase text-[24px] desk:text-[36px] desk:leading-[39.6px] desk:text-white text-center w-full mt-10 p-20'
          />
        )}
      </div>
    </div>
  )
}

export default GigsListData
