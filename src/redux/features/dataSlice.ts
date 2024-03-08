import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BaseReducerProps, baseState } from './baseReducer'
// import { getArtist, getArtists } from 'src/proxy/queries/artists/artistQueries'
import { DataModel } from 'src/proxy/queries/data/dataModel'
import { dataPage } from 'src/proxy/queries/data/data'
import { AuthStatus } from 'src/proxy/FirebaseAuth'

interface typeReducer extends BaseReducerProps {
  dataPage: Record<string, DataModel[]> | null
  selectedItem: DataModel | null
  auth: AuthStatus
  listen: boolean
}

const initialState: typeReducer = {
  dataPage: dataPage,
  selectedItem: null,
  auth: AuthStatus.NO_VERIFIED,
  listen: false,
  ...baseState
}

// export const getArtistsData = createAsyncThunk('get-artists', async () => {
//   const data = await getArtists()
//   // localStorage.setItem('artistsData', JSON.stringify(data))
//   // localStorage.setItem('lastArtistsFetchDate', String(currentTime))
//   return data
//   // }
//   // return null
// })

// export const getArtistData = createAsyncThunk('get-artists/{id}', async (id: number) => {
//   const artist = await getArtist(id)
//   return artist
// })

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
    setListen: (state, action: PayloadAction<boolean>) => {
      state.listen = action.payload
    }
  }
  // extraReducers: builder => {
  //   builder
  //     .addCase(getArtistsData.pending, state => {
  //       state.status = StateRequest.LOADING
  //     })
  //     .addCase(getArtistsData.rejected, state => {
  //       state.status = StateRequest.ERROR
  //     })
  //     .addCase(getArtistsData.fulfilled, (state, action) => {
  //       state.data = action.payload
  //       state.status = action.payload ? StateRequest.SUCCESS : StateRequest.ERROR
  //     })
  //     .addCase(getArtistData.pending, state => {
  //       state.artistByIdStatus = StateRequest.LOADING
  //     })
  //     .addCase(getArtistData.rejected, state => {
  //       state.artistByIdStatus = StateRequest.ERROR
  //     })
  //     .addCase(getArtistData.fulfilled, (state, action) => {
  //       state.artistById = action.payload
  //       state.artistByIdStatus = action.payload ? StateRequest.SUCCESS : StateRequest.ERROR
  //     })
  // }
})

export const { setSelectedItem, setAuthState, setLoad, setListen } = dataSlice.actions
export default dataSlice.reducer
