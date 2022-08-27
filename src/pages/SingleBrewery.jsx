import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleBrewery } from '../redux/actions/singleBrewerySlice'
import Loader from '../components/Loader'
import { FiExternalLink, FiArrowLeftCircle } from 'react-icons/fi'

const SingleBrewery = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleBrewery(id))
  }, [dispatch, id])

  const { singleBrewery, loading } = useSelector((state) => state.singleBrewery)

  return (
    <div className='hero min-h-screen bg-base-200 relative'>
      <Link
        to='/'
        className='absolute top-5 left-5 flex items-center text-lg link link-hover'
      >
        <FiArrowLeftCircle className='mr-2' /> Back to Breweries
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <div className='hero-content text-center'>
          <div className='max-w-md flex flex-col items-center'>
            <h1 className='text-5xl font-bold'>{singleBrewery.name}</h1>
            <p className='py-2 font-bold'>{singleBrewery.street}</p>
            <p className='py-2 font-bold'>{singleBrewery.city}</p>
            <p className='py-2 font-bold'>{singleBrewery.state}</p>
            <p className='py-2 font-bold'>{singleBrewery.country}</p>
            {singleBrewery.phone && (
              <p className='py-2 font-bold text-2xl'>
                Phone number: {singleBrewery.phone}
              </p>
            )}
            {singleBrewery.website_url !== null && (
              <a
                href={singleBrewery.website_url}
                target='_blank'
                rel='noopener noreferrer'
                className='link link-hover flex items-center mx-auto pt-4 text-4xl'
              >
                Visit website <FiExternalLink className='ml-2' />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleBrewery
