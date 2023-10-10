import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: state => {
      state.counter += 1
    },
    decrement: state => {
      state.counter -= 1
    }
  }
})

export const { increment, decrement } = testSlice.actions
export default testSlice.reducer
