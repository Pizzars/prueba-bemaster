'use client'
import { useAppSelector } from 'src/redux/hooks'
import InfiniteScrollList from '../Desktop/contentList/InfiniteScrollList'
import ContentMobileItem from './ContentMobileItem'
import { useParams } from 'next/navigation'
import { DataModel } from 'src/proxy/queries/data/dataModel'
// import ArtistsListScrollMobile from './ArtistsListScrollMobile'

interface Props {
  className?: string
}

const updateList = (list: DataModel[]) => {
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

const ContentMobileList = ({ className = '' }: Props) => {
  const { id } = useParams()
  const dataPage = useAppSelector(state => state.dataReducer.dataPage)

  const data = dataPage ? dataPage[id.toString()] : null

  if (!data) return <></>

  const getList = () => {
    if (!data) return <></>

    const listToShow = !data || data.length === 0 ? [] : data.length >= 50 ? data : updateList(data)

    return (
      <InfiniteScrollList>
        {listToShow.map((item, i) => {
          return <ContentMobileItem key={`item-${i}`} item={item} />
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

export default ContentMobileList
