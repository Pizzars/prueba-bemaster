import ArtistsList from './ContentMobileList'
import { useAppSelector } from 'src/redux/hooks'
import { useParams } from 'next/navigation'

const ContentMobile = () => {
  const { id } = useParams()
  const dataPage = useAppSelector(state => state.dataReducer.dataPage)

  const data = dataPage ? dataPage[id.toString()] : null

  if (!data) return <></>

  return (
    <div className='flex w-full'>
      <ArtistsList />
    </div>
  )
}

export default ContentMobile
