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

const ArtistsSelection = ({ filter }: Params) => {
  const [artistData, setArtistData] = useState<ArtistModel[] | null>(null)
  const artists = useAppSelector(state => state.artistsReducer.data)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (artists) {
      const newList = [
        ...artists.filter(artist => {
          if (artist.territory == filter) {
            return true
          }
          if (artist.territory !== filter && artist.territory === 'worldwide') {
            return true
          }
          return false
        })
      ]
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        .sort((a, b) => (a.territory || '').localeCompare(b.territory || ''))

      setArtistData(newList)

      // dispatch(selectArtist(newList[num]))
    }
  }, [artists, filter])

  return (
    <div className='p-16 big:p-20 bg-black-app'>
      {artistData &&
        artistData.map((artist, i) => {
          return (
            <button
              key={`artist-${i}`}
              className='inline-block ml-4 mb-1 big:ml-8 opacity-40 hover:opacity-100 cursor-pointer'
              onClick={() => dispatch(selectArtist(artist))}
            >
              <TitleSmall
                tag={TextTags.SPAN}
                text={`${artist.name}. `}
                color={TextColors.white}
                className='uppercase inline-block'
              />
            </button>
          )
        })}
    </div>
  )
}

export default ArtistsSelection
