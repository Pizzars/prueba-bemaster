import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { BaseReducerProps, StateRequest, baseState } from './baseReducer'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { getArtist, getArtists } from 'src/proxy/queries/artists/artistQueries'

interface typeReducer extends BaseReducerProps {
  data: ArtistModel[] | null
  artist: ArtistModel | null
  signleStatus: StateRequest
}

const initialState: typeReducer = {
  data: null,
  artist: null,
  signleStatus: StateRequest.EMPTY,
  ...baseState
}

export const getArtistsData = createAsyncThunk('get-artists', async () => {
  // 1. Verificar en localStorage la fecha de la última llamada
  const lastFetched = localStorage.getItem('lastArtistsFetchDate');
  const currentTime = new Date().getTime();
  
  // Si la última llamada fue hace menos de 24 horas y hay datos en localStorage, retorna esos datos
  if (lastFetched && (currentTime - Number(lastFetched)) <= 24 * 60 * 60 * 1000) {
    const cachedData = localStorage.getItem('artistsData');
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  }
  
  // 2. Si no hay datos en localStorage o ya pasaron 24 horas, haz la llamada
  const data = await getArtists();
  
  // 3. Guarda los datos y la fecha de la llamada en localStorage
  localStorage.setItem('artistsData', JSON.stringify(data));
  localStorage.setItem('lastArtistsFetchDate', String(currentTime));
  
  return data;
});


export const getArtistData = createAsyncThunk('get-artists/{id}', async (id: number) => {
  const data = await getArtist(id)
  return data
})

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    selectArtist: (state, action: PayloadAction<ArtistModel>) => {
      state.artist = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getArtistsData.pending, state => {
      state.status = StateRequest.LOADING
    })
    builder.addCase(getArtistsData.rejected, state => {
      state.status = StateRequest.ERROR
    })
    builder.addCase(getArtistsData.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload
        state.status = StateRequest.SUCCESS
      } else {
        state.status = StateRequest.ERROR
      }
    })
    builder.addCase(getArtistData.pending, state => {
      state.signleStatus = StateRequest.LOADING
    })
    builder.addCase(getArtistData.rejected, state => {
      state.signleStatus = StateRequest.ERROR
    })
    builder.addCase(getArtistData.fulfilled, (state, action) => {
      if (action.payload) {
        state.artist = action.payload
        state.signleStatus = StateRequest.SUCCESS
      } else {
        state.signleStatus = StateRequest.ERROR
      }
    })
  }
})

export const { selectArtist } = artistsSlice.actions
export default artistsSlice.reducer
