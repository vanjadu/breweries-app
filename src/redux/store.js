import { configureStore } from '@reduxjs/toolkit'
import brewerySlice from './actions/brewerySlice'
import singleBrewerySlice from './actions/singleBrewerySlice'

const store = configureStore({
  reducer: {
    breweries: brewerySlice,
    singleBrewery: singleBrewerySlice,
  },
})

export default store
