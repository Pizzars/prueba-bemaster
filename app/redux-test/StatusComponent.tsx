import { StateRequest } from 'src/redux/features/baseReducer'

const StatusComponent = ({ status }: { status: StateRequest }) => {
  switch (status) {
    case StateRequest.LOADING:
      return <div className='text-blue-600'>Loading...</div>
    case StateRequest.ERROR:
      return <div className='text-red-600'>Error</div>
    case StateRequest.SUCCESS:
      return <div className='text-green-600'>Success</div>
    default:
      return <div>Empty</div>
  }
}
export default StatusComponent
