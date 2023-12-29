import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { LegalModel } from 'src/proxy/queries/legal/legalModel'
import { getLegal } from 'src/proxy/queries/legal/legalQuery'

interface typeReducer extends BaseReducerProps {
  data: LegalModel | null
}

const initialState: typeReducer = {
  data: null,
  ...baseState
}

export const getLegalData = createAsyncThunk(
  'get-legal',
  // if you type your function argument here
  async () => {
    const data = await getLegal()
    return data
  }
)

export const legalSlice = createSlice({
  name: 'get/legal',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLegalData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getLegalData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getLegalData.fulfilled, (state, action) => {
      debugger
      if (action.payload) {
        state.data = action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = legalSlice.actions
export default legalSlice.reducer
