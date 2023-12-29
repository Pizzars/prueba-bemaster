import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  home: false,
  about: false,
  artists: false,
  gigs: false,
  podcasts: false,
  book: false,
  legal: false,
  policy: false
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
    },
    legalLoaded: state => {
      state.legal = true
    },
    policyLoaded: state => {
      state.policy = true
    }
  }
})

export const {
  homeLoaded,
  aboutLoaded,
  artistsLoaded,
  gigsLoaded,
  bookLoaded,
  podcastsLoaded,
  legalLoaded,
  policyLoaded
} = loadSlice.actions
export default loadSlice.reducer
