import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { getArtist, getArtists } from 'src/proxy/queries/artists/artistQueries'

interface typeReducer extends BaseReducerProps {
  data: ArtistModel[] | null
  artist: ArtistModel | null
  signleStatus: StateRequest
}

const initialState: typeReducer = {
  data: null,
  artist: null,
  signleStatus: StateRequest.EMPTY,
  ...baseState
}

export const getArtistsData = createAsyncThunk('get-artists', async () => {
  const data = await getArtists()
  return data
})

export const getArtistData = createAsyncThunk('get-artists/{id}', async (id: number) => {
  const data = await getArtist(id)
  return data
})

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArtistsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getArtistsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getArtistsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
    builder.addCase(getArtistData.pending, state => {
      state.signleStatus = StateRequest.LOADING
    })
    builder.addCase(getArtistData.rejected, state => {
      state.signleStatus = StateRequest.ERROR
    })
    builder.addCase(getArtistData.fulfilled, (state, action) => {
      if (action.payload) {
        state.artist = action.payload
        state.signleStatus = StateRequest.SUCCESS
      } else {
        state.signleStatus = StateRequest.ERROR
      }
    })
  }
})

export const {} = artistsSlice.actions
export default artistsSlice.reducer
