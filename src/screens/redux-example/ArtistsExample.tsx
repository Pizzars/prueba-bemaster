'use client'
import StatusComponent from 'app/(pages)/redux-test/StatusComponent'
import { useEffect } from 'react'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const ArtistsExample = () => {
  const list = useAppSelector(state => state.artistsReducer.data)
  const status = useAppSelector(state => state.artistsReducer.status)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getArtistsData())
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div className='flex'>
        Status: <StatusComponent status={status} />
      </div>
      <div>
        Artists Data:
        <div>
          {list?.map((artist, i) => {
            return (
              <span
                className={`mx-2 ${i % 2 === 0 ? 'text-pink-600' : 'text-orange-600'}`}
                key={`artist-${i}`}
              >
                {artist.name}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ArtistsExample
