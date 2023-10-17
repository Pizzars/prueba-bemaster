import { configureStore } from '@reduxjs/toolkit'
import testReducer from './features/TestSlice'
import aboutReducer from './features/aboutSlice'
import artistsReducer from './features/artistsSlice'
import eventsReducer from './features/eventsSlice'
import newsReducer from './features/newsSlice'
import podcastsReducer from './features/podcastsSlice'

export const store = configureStore({
  reducer: {
    testReducer,
    aboutReducer,
    artistsReducer,
    eventsReducer,
    newsReducer,
    podcastsReducer
  }
})

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
