'use client'
import React, { useEffect } from 'react'
import { useAppSelector } from 'src/redux/hooks'
// import ArtistsSelection from '../Components/ArtistsSelection'
import ArtistData from './ContentData'
import InfiniteContentList from './InfiniteContentList'
import ContentTitle from '../Components/ContentTitle'
import { useParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setSelectedItem } from 'src/redux/features/artistsSlice'

const ContentData = () => {
  const { id } = useParams()
  const dataPage = useAppSelector(state => state.artistsReducer.dataPage)
  const dispatch = useDispatch()

  const data = dataPage ? dataPage[id.toString()] : null

  useEffect(() => {
    if (data && data.length) {
      dispatch(setSelectedItem(data[0]))
    }
  }, [dataPage])

  if (!data) return <></>
  return (
    <div className={`relative pt-16 big:pt-24 h-screen transform delay-300 bg-black-app`}>
      <div className={`relative transform delay-300 bg-black-app h-full flex flex-col`}>
        <ContentTitle />

        <div className='bg-black-app flex pl-8 flex-1 overflow-y-hidden'>
          <div className='w-1/4 h-full'>
            <InfiniteContentList />
          </div>
          <div className='w-3/4'>
            <ArtistData />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentData
