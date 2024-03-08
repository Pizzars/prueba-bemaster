'use client'
import React, { useEffect } from 'react'
import useWindowSize from 'src/hooks/useWindowSize'
import ContentDataDesk from './Desktop/ContentDataDesk'
import ContentMobile from './Mobile/ContentMobile'
import Navbar from '../components/general/Navbar'
import { useParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getDataDB } from 'src/redux/features/dataSlice'
// import Load from '../components/general/Load'
// import { PageLoad } from '../components/general/Loading'

const ContentCategory = () => {
  const size = useWindowSize()
  const width = size.width ?? 0

  const { id } = useParams()
  const { dataPage, load, error } = useAppSelector(state => state.dataReducer)
  const dispatch = useAppDispatch()

  const data = dataPage ? dataPage[id.toString()] : null

  useEffect(() => {
    if (!data && !load && !error) {
      dispatch(getDataDB(id.toString()))
    }
  }, [dataPage, data])

  return (
    <>
      <div id='secret-nav' className='fixed top-0 left-0 z-50 w-full '>
        <Navbar />
      </div>
      <div className=''>
        {width > 800 ? (
          <div className='hidden desk:block'>
            <ContentDataDesk />
          </div>
        ) : (
          <div className='desk:hidden'>
            <ContentMobile />
          </div>
        )}
      </div>

      {/* <div className='relative z-50'> */}
      {/* <Loading type={PageLoad.ARTISTS} /> */}
      {/* <Load type={PageLoad.ARTISTS} status={status} /> */}
      {/* </div> */}
    </>
  )
}

export default ContentCategory
