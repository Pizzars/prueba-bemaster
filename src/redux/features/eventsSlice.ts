import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { EventModel } from 'src/proxy/queries/events/eventModel'
import { getEvents } from 'src/proxy/queries/events/eventQueries'
import { getWeeksForEvents } from 'src/utils/functions'

interface typeReducer extends BaseReducerProps {
  data: EventModel[] | null
  weeks: { title: string; option: string }[]
}

const initialState: typeReducer = {
  data: [],
  weeks: [],
  ...baseState
}

export const getEventsData = createAsyncThunk('get-events', async () => {
  const data = await getEvents()
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
        const list = action.payload ? [...(state.data ?? []), ...action.payload] : action.payload
        const weeks = getWeeksForEvents(list)

        state.data = list
        state.weeks = weeks
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
  }
})

export const {} = EventsSlice.actions
export default EventsSlice.reducer
