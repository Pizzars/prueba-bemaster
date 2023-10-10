import { configureStore } from '@reduxjs/toolkit'
import testReducer from './features/TestSlice'

export const store = configureStore({
  reducer: {
    testReducer
  }
})

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
