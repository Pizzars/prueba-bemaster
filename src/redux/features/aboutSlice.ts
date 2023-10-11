import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AboutModel } from 'src/proxy/queries/about/aboutModel'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { getAbout } from 'src/proxy/queries/about/aboutQuery'

interface typeReducer extends BaseReducerProps {
  data: AboutModel | null
}

const initialState: typeReducer = {
  data: null,
  ...baseState
}

export const getAboutData = createAsyncThunk(
  'get-about',
  // if you type your function argument here
  async () => {
    const data = await getAbout()
    return data
  }
)

export const aboutSlice = createSlice({
  name: 'get/about',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAboutData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getAboutData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getAboutData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = aboutSlice.actions
export default aboutSlice.reducer
