import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  home: false,
  about: false,
  artists: false,
  gigs: false,
  podcasts: false,
  book: false
}

export const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    homeLoaded: state => {
      state.home = true
    },
    aboutLoaded: state => {
      state.about = true
    },
    artistsLoaded: state => {
      state.artists = true
    },
    gigsLoaded: state => {
      state.gigs = true
    },
    podcastsLoaded: state => {
      state.podcasts = true
    },
    bookLoaded: state => {
      state.book = true
    }
  }
})

export const { homeLoaded, aboutLoaded, artistsLoaded, gigsLoaded, bookLoaded, podcastsLoaded } =
  loadSlice.actions
export default loadSlice.reducer
