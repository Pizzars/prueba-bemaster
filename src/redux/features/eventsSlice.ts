import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { EventModel } from 'src/proxy/queries/events/eventModel'
import { getEvents } from 'src/proxy/queries/events/eventQueries'

interface typeReducer extends BaseReducerProps {
  data: EventModel[] | null
}

const initialState: typeReducer = {
  data: [],
  ...baseState
}

export const getEventsData = createAsyncThunk('get-events', async (page: number) => {
  const data = await getEvents(page)
  return data
})

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getEventsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getEventsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getEventsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload ? [...(state.data ?? []), ...action.payload] : action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = EventsSlice.actions
export default EventsSlice.reducer
