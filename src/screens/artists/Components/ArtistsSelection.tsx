import { selectArtist } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import TextAutoSize from './TextAutoSize'
// import { TextTags } from 'src/screens/components/texts/TextBase'
// import TitleSmall from 'src/screens/components/texts/TitleSmall'
// import { TextColors } from 'src/utils/Colors'

const ArtistsSelection = () => {
  const artistData = useAppSelector(state => state.artistsReducer.artistData)
  const dispatch = useAppDispatch()

  if (!artistData) return <></>

  return (
    <div className='pl-12 pr-16 py-8 big:p-20 flex-1 parent flex flex-col'>
      {/* <div className='w-full h-full max-w-full max-h-full '> */}
      {artistData && (
        <TextAutoSize>
          {/* <div className='uppercase inline-block text-white'> */}
          {artistData.map((artist, i) => {
            return (
              <button
                key={`artist-${i}`}
                className='inline-block ml-4 mb-1 big:ml-8 opacity-40 hover:opacity-100 cursor-pointer text-white'
                onClick={() => dispatch(selectArtist(artist))}
              >
                {`${artist.name}. `}
              </button>
            )
          })}
          {/* </div> */}
        </TextAutoSize>
      )}
      {/* </div> */}
    </div>
  )
}

export default ArtistsSelection
