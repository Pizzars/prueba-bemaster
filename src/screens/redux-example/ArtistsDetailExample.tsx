'use client'
import StatusComponent from 'app/(pages)/redux-test/StatusComponent'
import { useEffect } from 'react'
import { getArtistData } from 'src/redux/features/artistsSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const ArtistsDetailExample = () => {
  const artist = useAppSelector(state => state.artistsReducer.artist)
  const status = useAppSelector(state => state.artistsReducer.signleStatus)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getArtistData(339))
  }, [])

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <div className='flex'>
        Status: <StatusComponent status={status} />
      </div>
      <div>
        Artists Detail Data:
        <div>{artist && <span className={`mx-2 text-orange-600`}>{artist.name}</span>}</div>
      </div>
    </div>
  )
}

export default ArtistsDetailExample
