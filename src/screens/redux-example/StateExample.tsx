'use client'
import { decrement, increment } from 'src/redux/features/TestSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

const StateExample = () => {
  const value = useAppSelector(state => state.testReducer.counter)
  const dispatch = useAppDispatch()

  return (
    <div className='m-8 border-black-app border-2 text-black-app p-4'>
      <h1>Total: {value}</h1>
      <button
        onClick={() => dispatch(increment())}
        className='px-4 py-2 bg-black-app text-white rounded-lg'
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch(decrement())}
        className='px-4 py-2 bg-black-app text-white rounded-lg'
      >
        Decrement
      </button>
    </div>
  )
}

export default StateExample
