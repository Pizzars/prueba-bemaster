import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { NewModel } from 'src/proxy/queries/news/newModel'
import { getNews } from 'src/proxy/queries/news/newsQueries'

interface typeReducer extends BaseReducerProps {
  data: NewModel[] | null
}

const initialState: typeReducer = {
  data: [],
  ...baseState
}

export const getNewsData = createAsyncThunk('get-news', async (page: number) => {
  const data = await getNews(page)
  return data
})

export const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNewsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getNewsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getNewsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload ? [...(state.data ?? []), ...action.payload] : action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = NewsSlice.actions
export default NewsSlice.reducer
