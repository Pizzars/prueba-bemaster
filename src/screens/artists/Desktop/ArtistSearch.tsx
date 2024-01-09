import { useEffect, useState } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'

interface Params {
  filter: string | null
}

const ArtistSearch = ({ filter }: Params) => {
  const [artistData, setArtistData] = useState<ArtistModel[] | null>(null)
  const [search, setSearch] = useState<string>('')
  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (artists) {
      const newList = [
        ...artists.filter(artist => {
          if (artist.territory == filter) {
            return true
          }
          return false
        })
      ]
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        .sort((a, b) => (a.territory || '').localeCompare(b.territory || ''))

      setArtistData(newList)
      setSearch('')

      // dispatch(selectArtist(newList[num]))
    }
  }, [artists, filter])

  return (
    <div className=' relative'>
      <label className='text-small uppercase w-fit bg-transparent text-white inline-block opacity-0 swis'>
        Search Artist
      </label>
      <input
        placeholder='Search Artist'
        className='text-small uppercase w-full bg-transparent text-white inline-block absolute top-0 left-0 border-b-2 border-b-white swis outline-none'
        onChange={e => setSearch(e.target.value)}
      />
      {search && search.length > 2 && artistData && (
        <div className='absolute top-12 left-0 bg-black-app max-h-[60vh] overflow-hidden overflow-y-auto w-full z-10 p-2'>
          {artistData
            .filter(artist => {
              if (artist.name.toUpperCase().includes(search.toUpperCase())) {
                return true
              }
              return false
            })
            .map((artist, i) => {
              return (
                <button
                  key={`artist-${i}`}
                  className='mb-1 opacity-40 hover:opacity-100 cursor-pointer whitespace-nowrap'
                  onClick={() => dispatch(selectArtist(artist))}
                >
                  <TitleSmall
                    tag={TextTags.SPAN}
                    text={artist.name}
                    color={TextColors.white}
                    className='uppercase  whitespace-nowrap'
                  />
                </button>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default ArtistSearch
