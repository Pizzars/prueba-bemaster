import React from 'react'
import { useAppSelector } from 'src/redux/hooks'

import InfiniteScrollList from './contentList/InfiniteScrollList'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'
import { useParams } from 'next/navigation'
import { DataModel } from 'src/proxy/queries/data/dataModel'
import { useDispatch } from 'react-redux'
import { setSelectedItem } from 'src/redux/features/artistsSlice'

const updateList = (list: DataModel[]) => {
  const targetLength = 50
  const newList = [...list]

  while (newList.length < targetLength) {
    const listToAdd = [...list]
    // Duplica los elementos de la lista original
    newList.push(...listToAdd)
  }
  return newList
}

const InfiniteContentList = () => {
  const { id } = useParams()
  const dataPage = useAppSelector(state => state.artistsReducer.dataPage)
  const selected = useAppSelector(state => state.artistsReducer.selectedItem)
  const dispatch = useDispatch()

  const data = dataPage ? dataPage[id.toString()] : null

  if (!data) return <></>

  const getList = () => {
    if (!data) return <></>

    const listToShow = !data || data.length === 0 ? [] : data.length >= 50 ? data : updateList(data)

    return (
      <InfiniteScrollList>
        {listToShow.map((info, i) => {
          return (
            <div
              key={`artists-${i}`}
              className={`item-list text-start py-2 px-8 cursor-pointer ${
                selected && selected.name === info.name ? 'opacity-100' : 'opacity-50'
              } hover:opacity-100`}
              onClick={() => {
                dispatch(setSelectedItem(info))
              }}
            >
              <TitleSmall
                text={info.name}
                color={TextColors.dark}
                className={`uppercase text-start hover:text-yellow-app ${
                  selected && selected.name === info.name
                    ? 'text-yellow-app'
                    : 'desk:text-white text-white'
                }`}
              />
            </div>
          )
          // return <ItemListArtist key={`artists-${i}`} artist={artist} />
        })}
      </InfiniteScrollList>
    )
  }

  return (
    <div className='w-full  h-full bg-white desk:bg-black-app relative'>
      <div className='w-full  h-full'>{getList()}</div>
      <div
        className={`absolute bg-gradient-to-b from-white desk:from-black-app from-10% to-transparent h-[20vh] z-10 left-0 top-32 desk:top-0 w-full `}
      ></div>
      <div
        className={`absolute bg-gradient-to-t from-white desk:from-black-app from-10% to-transparent h-[15vh] z-10 left-0 bottom-0 w-full `}
      ></div>
    </div>
  )
}

export default InfiniteContentList
