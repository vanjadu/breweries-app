import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBreweries } from '../../redux/actions/brewerySlice'

const SearchBreweries = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBreweries(search))
  }, [search, dispatch])

  return (
    <div className='container mt-6 flex flex-col items-center'>
      <input
        type='text'
        placeholder='Search breweries...'
        className='input input-bordered input-primary w-full max-w-xs text-lg'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBreweries
