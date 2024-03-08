import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BaseReducerProps, baseState } from './baseReducer'
// import { getArtist, getArtists } from 'src/proxy/queries/artists/artistQueries'
import { DataModel } from 'src/proxy/queries/data/dataModel'
// import { dataPage } from 'src/proxy/queries/data/data'
import { AuthStatus, getDataFirebase } from 'src/proxy/FirebaseAuth'

interface typeReducer extends BaseReducerProps {
  dataPage: Record<string, DataModel[] | null> | null
  selectedItem: DataModel | null
  auth: AuthStatus
  listen: boolean
}

const initialState: typeReducer = {
  // dataPage: dataPage,
  dataPage: {
    exercises: null,
    equipo: null,
    tecnicas: null,
    formas: null,
    filosofia: null
  },
  selectedItem: null,
  auth: AuthStatus.NO_VERIFIED,
  listen: false,
  ...baseState
}

export const getDataDB = createAsyncThunk('get-artists/{id}', async (collection: string) => {
  const list = await getDataFirebase(collection)
  return { collection, list }
})

export const dataSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<DataModel | null>) => {
      state.selectedItem = action.payload
    },
    setAuthState: (state, action: PayloadAction<AuthStatus>) => {
      state.auth = action.payload
    },
    setLoad: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setListen: (state, action: PayloadAction<boolean>) => {
      state.listen = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getDataDB.pending, state => {
        state.load = true
      })
      .addCase(getDataDB.rejected, state => {
        state.load = false
        state.error = true
      })
      .addCase(getDataDB.fulfilled, (state, action) => {
        state.load = false
        if (action.payload.list) {
          state.dataPage = { ...state.dataPage, [action.payload.collection]: action.payload.list }
        } else {
          state.error = true
        }
      })
  }
})

export const { setSelectedItem, setAuthState, setLoad, setListen, setError } = dataSlice.actions
export default dataSlice.reducer
