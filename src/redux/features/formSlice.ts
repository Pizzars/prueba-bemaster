import { createSlice } from '@reduxjs/toolkit'
import { SelectListParams } from 'src/screens/components/inputs/Select'
import { BaseReducerProps, baseState, StateRequest } from './baseReducer'

interface TypeReducer extends BaseReducerProps {
  artists: SelectListParams[] | null
  countries: SelectListParams[] | null
}

const initialState: TypeReducer = {
  artists: null,
  countries: null,
  ...baseState
}

export const formSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    gottenDataForm: (state, action: any) => {
      state.artists = action.payload.artists
      state.countries = action.payload.countries
      state.status = StateRequest.SUCCESS
    }
  }
})

export const { gottenDataForm } = formSlice.actions
export default formSlice.reducer
