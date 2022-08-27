import React, { useState, useEffect } from 'react'
import { FiArrowUpCircle } from 'react-icons/fi'

const TopArrow = () => {
  // if window is scrolled down, show the top arrow
  const [showTopArrow, setShowTopArrow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setShowTopArrow(true)
      } else {
        setShowTopArrow(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [showTopArrow])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showTopArrow && (
        <div
          className='flex items-center justify-center fixed bottom-2 right-4 p-4 z-10 cursor-pointer'
          onClick={scrollToTop}
        >
          <FiArrowUpCircle className='text-4xl' />
        </div>
      )}
    </>
  )
}

export default TopArrow
