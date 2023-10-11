import { StateRequest } from 'src/redux/features/baseReducer'

const StatusComponent = ({ status }: { status: StateRequest }) => {
  switch (status) {
    case StateRequest.LOADING:
      return <span className='text-blue-600'>Loading...</span>
    case StateRequest.ERROR:
      return <span className='text-red-600'>Error</span>
    case StateRequest.SUCCESS:
      return <span className='text-green-600'>Success</span>
    default:
      return <span className='text-gray-400'>Empty</span>
  }
}
export default StatusComponent
