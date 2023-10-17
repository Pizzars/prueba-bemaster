'use client'
import StatusComponent from 'app/(pages)/redux-test/StatusComponent'
import { useEffect } from 'react'
import { getNewsData } from 'src/redux/features/newsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const NewsExample = () => {
  const list = useAppSelector(state => state.newsReducer.data)
  const status = useAppSelector(state => state.newsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getNewsData(1))
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div className='flex'>
        Status: <StatusComponent status={status} />
      </div>
      <div>
        News Data:
        <div>
          {list?.map((artist, i) => {
            return (
              <span
                className={`mx-2 ${i % 2 === 0 ? 'text-pink-600' : 'text-orange-600'}`}
                key={`artist-${i}`}
              >
                {artist.title}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewsExample
