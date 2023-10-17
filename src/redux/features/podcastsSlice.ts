import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { PodcastModel } from 'src/proxy/queries/podcasts/podcastModel'
import { getPodcasts } from 'src/proxy/queries/podcasts/podcastsQueries'

interface typeReducer extends BaseReducerProps {
  data: PodcastModel[] | null
}

const initialState: typeReducer = {
  data: [],
  ...baseState
}

export const getPodcastsData = createAsyncThunk('get-podcasts', async (page: number) => {
  const data = await getPodcasts(page)
  return data
})

export const PodcastsSlice = createSlice({
  name: 'get/podcasts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPodcastsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getPodcastsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getPodcastsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload ? [...(state.data ?? []), ...action.payload] : action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = PodcastsSlice.actions
export default PodcastsSlice.reducer
