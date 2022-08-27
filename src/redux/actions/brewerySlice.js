import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// if search is true, then search for breweries, otherwise fetch all breweries
export const fetchBreweries = createAsyncThunk(
  'brewerySlice/fetchBreweries',
  async (search) => {
    const url = search
      ? `https://api.openbrewerydb.org/breweries/autocomplete?query=${search}`
      : 'https://api.openbrewerydb.org/breweries'
    const { data } = await axios.get(url)
    return data
  }
)

const brewerySlice = createSlice({
  name: 'breweries',
  initialState: {
    breweries: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchBreweries.pending]: (state, action) => {
      state.loading = true
    },
    [fetchBreweries.fulfilled]: (state, action) => {
      state.loading = false
      state.breweries = action.payload
    },
    [fetchBreweries.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default brewerySlice.reducer
