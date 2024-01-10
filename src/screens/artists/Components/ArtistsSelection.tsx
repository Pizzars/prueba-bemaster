import { selectArtist } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { TextTags } from 'src/screens/components/texts/TextBase'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'

const ArtistsSelection = () => {
  const artistData = useAppSelector(state => state.artistsReducer.artistData)
  const dispatch = useAppDispatch()

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
              <div className='text-artists uppercase inline-block text-white'>{artist.name}</div>
              {/* <TitleSmall
                tag={TextTags.SPAN}
                text={`${artist.name}. `}
                color={TextColors.white}
                className='uppercase inline-block'
              /> */}
            </button>
          )
        })}
    </div>
  )
}

export default ArtistsSelection
