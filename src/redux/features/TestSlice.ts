import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
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
