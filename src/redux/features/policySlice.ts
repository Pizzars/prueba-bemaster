import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { getPolicy } from 'src/proxy/queries/policy/policyQuery'
import { PolicyModel } from 'src/proxy/queries/policy/policyModel'

interface typeReducer extends BaseReducerProps {
  data: PolicyModel | null
}

const initialState: typeReducer = {
  data: null,
  ...baseState
}

export const getPolicyData = createAsyncThunk(
  'get-policy',
  // if you type your function argument here
  async () => {
    const data = await getPolicy()
    return data
  }
)

export const policySlice = createSlice({
  name: 'get/policy',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPolicyData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getPolicyData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getPolicyData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = policySlice.actions
export default policySlice.reducer
