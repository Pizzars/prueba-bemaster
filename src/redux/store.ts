import { configureStore } from '@reduxjs/toolkit'
import testReducer from './features/TestSlice'
import aboutReducer from './features/aboutSlice'

export const store = configureStore({
  reducer: {
    testReducer,
    aboutReducer
  }
})

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
