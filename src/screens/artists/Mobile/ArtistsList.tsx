'use client'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { useAppSelector } from 'src/redux/hooks'
import InfiniteScrollList from '../Desktop/ArtistList/InfiniteScrollList'
import ArtistItem from './ArtistItem'
// import ArtistsListScrollMobile from './ArtistsListScrollMobile'

interface Props {
  className?: string
}

const updateList = (list: ArtistModel[]) => {
  const targetLength = 50

  let n = 0
  const newList = [...list]

  while (newList.length < targetLength || n >= 50) {
    n++
    // Duplica los elementos de la lista original
    const listToAdd = [...list]
    newList.push(...listToAdd)
  }
  return newList
}

const ArtistsList = ({ className = '' }: Props) => {
  const artistData = useAppSelector(state => state.artistsReducer.artistData)

  if (!artistData) return <></>

  const getList = () => {
    const listToShow =
      !artistData || !artistData.length
        ? []
        : artistData.length >= 50
        ? artistData
        : updateList(artistData)

    if (!artistData) return <></>
    return (
      <InfiniteScrollList>
        {listToShow.map((artist, i) => {
          return <ArtistItem key={`artists-${i}`} artist={artist} />
        })}
      </InfiniteScrollList>
    )
  }

  return (
    <div
      className={`flex flex-col ${className} w-full pl-8 pr-6 space-y-5 pb-12 bg-white relative h-screen`}
      style={{
        paddingTop: 150
      }}
    >
      <div className='h-full overflow-y-scroll bg-white w-full'>
        {/* <ArtistsListScrollMobile list={listToShow} /> */}
        {getList()}
      </div>
    </div>
  )
}

export default ArtistsList
