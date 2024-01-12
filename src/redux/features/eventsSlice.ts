import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { EventModel } from 'src/proxy/queries/events/eventModel'
import { getEvents } from 'src/proxy/queries/events/eventQueries'
import { getWeeksForEvents } from 'src/utils/functions'

interface typeReducer extends BaseReducerProps {
  data: EventModel[] | null
  artistEvents: EventModel[] | null
  weeks: { title: string; option: string }[]
}

const initialState: typeReducer = {
  data: [],
  weeks: [],
  artistEvents: null,
  ...baseState
}

export const getEventsData = createAsyncThunk('get-events', async () => {
  const data = await getEvents()
  return data
})

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    getArtistEvents: (state, action: PayloadAction<string | null>) => {
      const name = action.payload
      if (!name) {
        state.artistEvents = null
        return
      }
      if (!state.data) return
      const events = state.data.filter(event => {
        return event.artist.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      })
      state.artistEvents = events
    }
  },
  extraReducers: builder => {
    builder.addCase(getEventsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getEventsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getEventsData.fulfilled, (state, action) => {
      if (action.payload) {
        const list = action.payload ? [...action.payload] : action.payload
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

export const { getArtistEvents } = EventsSlice.actions
export default EventsSlice.reducer
