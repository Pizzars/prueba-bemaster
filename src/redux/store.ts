import { configureStore } from '@reduxjs/toolkit'
import testReducer from './features/TestSlice'
import dataReducer from './features/dataSlice'

export const store = configureStore({
  reducer: {
    testReducer,
    dataReducer
  }
})

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
