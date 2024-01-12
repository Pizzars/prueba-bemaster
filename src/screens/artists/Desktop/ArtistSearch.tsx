import { useState } from 'react'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { getArtistEvents } from 'src/redux/features/eventsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TextIcon, { TextIcons } from 'src/screens/components/icons/TextIcon'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSection from 'src/screens/components/texts/TitleSection'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'

const ArtistSearch = () => {
  const [search, setSearch] = useState<string>('')
  const [hide, setHide] = useState<boolean>(false)
  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useAppDispatch()

  return (
    <div className=' relative flex'>
      <div className='relative'>
        <label
          className={`text-small uppercase w-fit bg-transparent text-white inline-block swis font-bold ${
            hide ? 'opacity-0' : 'opacity-40'
          }`}
        >
          Search Artist
        </label>
        <input
          // placeholder='Search Artist'
          className='text-small uppercase w-full bg-transparent text-white inline-block absolute top-0 left-0 z-20 text-center border-b-2 border-b-white swis outline-none font-bold'
          onChange={e => setSearch(e.target.value)}
          value={search}
          onFocus={() => setHide(true)}
          onBlur={() => (search.length ? null : setHide(false))}
        />
      </div>
      {search && search.length > 0 && artists && (
        <div className='fixed top-0 left-0 bg-black-app/90 w-screen h-screen z-10 p-2 pt-40 px-16 big:px-24'>
          <div className='w-full h-full overflow-y-auto z-10 p-2 flex flex-col justify-start items-start'>
            {artists
              .filter(artist => {
                if (artist.name.toUpperCase().startsWith(search.toUpperCase())) {
                  return true
                }
                return false
              })
              .map((artist, i) => {
                return (
                  <button
                    key={`artist-${i}`}
                    className='pb-8 cursor-pointer flex flex-col items-start'
                    onClick={() => {
                      dispatch(selectArtist(artist))
                      dispatch(getArtistEvents(artist.name))
                    }}
                  >
                    <TitleSection
                      tag={TextTags.SPAN}
                      text={artist.name}
                      color={TextColors.white}
                      className='uppercase  whitespace-nowrap'
                    />
                    <TitleSmall
                      tag={TextTags.SPAN}
                      text={`${(artist.territory ?? '').replaceAll('_', ' ')} ${artist.info ?? ''}`}
                      color={TextColors.white}
                      className='uppercase font-bold  whitespace-nowrap opacity-40 bold'
                    />
                  </button>
                )
              })}
          </div>
        </div>
      )}

      <button
        className={`flex justify-end items-center mt-1 overflow-hidden relative z-20 cursor-pointer transition-all delay-300 ${
          search.length > 0 ? 'w-[10rem] ml-6' : 'w-[0rem] ml-0'
        }`}
        onClick={() => setSearch('')}
      >
        <TextIcon icon={TextIcons.LEFT_ARROW} color={TextColors.white} />
        <TitleSmall
          text='go Back'
          color={TextColors.white}
          className='ml-2 uppercase swis font-bold whitespace-nowrap'
        />
      </button>
    </div>
  )
}

export default ArtistSearch
