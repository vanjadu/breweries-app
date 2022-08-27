import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi'

const BreweryCard = ({ name, state, street, postal_code, id }) => {
  return (
    <div className='card w-96 bg-primary text-primary-content hover:drop-shadow-md'>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{street}</p>
        <p>{state}</p>
        {postal_code && <p>Postal code: {postal_code}</p>}
        <div className='card-actions justify-end mt-2'>
          <Link to={`/brewery/${id}`}>
            <button className='btn'>
              Read more <FiArrowRightCircle className='ml-2 text-2xl' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BreweryCard
