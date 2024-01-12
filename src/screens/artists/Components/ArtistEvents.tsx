import React from 'react'
import { useAppSelector } from 'src/redux/hooks'
import Divider from 'src/screens/components/general/Divider'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { gigsFallbackMessages } from 'src/utils/consts'
import { addZero } from 'src/utils/functions'

interface Params {
  detail?: boolean
}

const ArtistEvents = ({ detail = false }: Params) => {
  const currentLanguage = useAppSelector(state => state.languageReducer.language)
  const gigs = useAppSelector(state => state.eventsReducer.artistEvents)

  if (!gigs || (gigs && !gigs.length)) return <></>
  return (
    <>
      {!detail && <Divider className='mt-2 mx-8' />}
      <div className={`${!detail ? 'pl-8' : ''} flex-1 overflow-y-auto`}>
        <div className='flex flex-col flex-wrap'>
          {gigs.length ? (
            gigs.map((gig, i) => {
              return (
                <div key={`gig-${i}`} className='w-full '>
                  <div className='flex flex-col p-3 '>
                    <section className={`flex flex-col`}>
                      <div className='flex flex-col'>
                        <TitleMedium
                          text={`${addZero(gig.date.day)}.${addZero(gig.date.month)}.${
                            gig.date.year - 2000
                          }`}
                          className='uppercase '
                        />
                        <div className='ml-5 mt-2'>
                          <TitleSmall
                            text={gig.artist.name || gigsFallbackMessages.artist[currentLanguage]}
                            className='uppercase'
                          />
                          <TextParagraph
                            text={gig.venue.name || gigsFallbackMessages.venue[currentLanguage]}
                            className='mt-1 opacity-40'
                          />
                          <TextParagraph
                            text={
                              gig.venue.city || gig.venue.country
                                ? `${gig.venue.city ? `${gig.venue.city}, ` : ''}${
                                    gig.venue.country
                                  }`
                                : gigsFallbackMessages.location[currentLanguage]
                            }
                            className='opacity-40 z-0'
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              )
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default ArtistEvents
