import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBreweries } from '../../redux/actions/brewerySlice'
import BreweryCard from '../BreweryCard'
import Loader from '../Loader'
import SearchBreweries from '../SearchBreweries'
import TopArrow from '../TopArrow'

const BreweryList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBreweries())
  }, [dispatch])

  const { breweries, loading } = useSelector((state) => state.breweries)

  console.log(breweries)

  return (
    <div className='container flex flex-col items-center py-10 mx-auto relative'>
      <TopArrow />
      <p className='opacity-60 mb-2 uppercase tracking-wide'>
        Welcome to Breweries App
      </p>
      <h1 className='text-5xl font-bold'>Breweries List</h1>
      <SearchBreweries />
      {loading ? (
        <Loader />
      ) : (
        <div className='container flex items-center justify-center gap-6 flex-wrap mt-10'>
          {breweries?.map((brewery, i) => (
            <BreweryCard key={i} {...brewery} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BreweryList
