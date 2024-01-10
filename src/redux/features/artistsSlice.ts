import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { getArtist, getArtists } from 'src/proxy/queries/artists/artistQueries'

interface typeReducer extends BaseReducerProps {
  data: ArtistModel[] | null
  artist: ArtistModel | null
  artistById: ArtistModel | null
  artistByIdStatus: StateRequest
  signleStatus: StateRequest
  minId: number | null
  maxId: number | null
  filter: string | null
  artistData: ArtistModel[] | null
}

const initialState: typeReducer = {
  data: null,
  artist: null,
  artistById: null,
  minId: null,
  maxId: null,
  filter: null,
  artistData: null,
  artistByIdStatus: StateRequest.EMPTY,
  signleStatus: StateRequest.EMPTY,
  ...baseState
}

export const getArtistsData = createAsyncThunk('get-artists', async () => {
  // if (typeof window !== 'undefined') {
  // const lastFetched = localStorage.getItem('lastArtistsFetchDate')
  // const currentTime = new Date().getTime()
  // if (lastFetched && currentTime - Number(lastFetched) <= 24 * 60 * 60 * 1000) {
  //   const cachedData = localStorage.getItem('artistsData')
  //   if (cachedData && cachedData !== 'null') {
  //     return JSON.parse(cachedData)
  //   }
  // }
  const data = await getArtists()
  // localStorage.setItem('artistsData', JSON.stringify(data))
  // localStorage.setItem('lastArtistsFetchDate', String(currentTime))
  return data
  // }
  // return null
})

export const getArtistData = createAsyncThunk('get-artists/{id}', async (id: number) => {
  const artist = await getArtist(id)
  return artist
})

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    selectArtist: (state, action: PayloadAction<ArtistModel | null>) => {
      state.artist = action.payload
    },
    setMinId: (state, action: PayloadAction<number>) => {
      state.minId = action.payload
    },
    setMaxId: (state, action: PayloadAction<number>) => {
      state.maxId = action.payload
    },
    setFilter: (state, action: PayloadAction<string | null>) => {
      const filter = action.payload
      state.filter = filter
      if (!filter) {
        state.artistData = null
        state.artist = null
      }
      if (!state.data) return
      const list = state.data.filter(artist => {
        if (artist.territory == filter) {
          return true
        }
        if (artist.territory !== filter && artist.territory === 'worldwide') {
          return true
        }
        return false
      })
      state.artistData = list
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getArtistsData.pending, state => {
        state.status = StateRequest.LOADING
      })
      .addCase(getArtistsData.rejected, state => {
        state.status = StateRequest.ERROR
      })
      .addCase(getArtistsData.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = action.payload ? StateRequest.SUCCESS : StateRequest.ERROR
      })
      .addCase(getArtistData.pending, state => {
        state.artistByIdStatus = StateRequest.LOADING
      })
      .addCase(getArtistData.rejected, state => {
        state.artistByIdStatus = StateRequest.ERROR
      })
      .addCase(getArtistData.fulfilled, (state, action) => {
        state.artistById = action.payload
        state.artistByIdStatus = action.payload ? StateRequest.SUCCESS : StateRequest.ERROR
      })
  }
})

export const { selectArtist, setMinId, setMaxId, setFilter } = artistsSlice.actions
export default artistsSlice.reducer
