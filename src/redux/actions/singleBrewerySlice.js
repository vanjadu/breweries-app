import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSingleBrewery = createAsyncThunk(
  'singleBrewery/fetchSingleBrewery',
  async (id) => {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries/${id}`
    )
    return response.data
  }
)

const singleBrewerySlice = createSlice({
  name: 'singleBrewery',
  initialState: {
    singleBrewery: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchSingleBrewery.pending]: (state) => {
      state.loading = true
    },
    [fetchSingleBrewery.fulfilled]: (state, action) => {
      state.singleBrewery = action.payload
      state.loading = false
    },
    [fetchSingleBrewery.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false
    },
  },
})

export default singleBrewerySlice.reducer
