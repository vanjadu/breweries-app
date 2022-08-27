import React from 'react'
import { RevolvingDot } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='container flex items-center justify-center mx-auto mt-4'>
      <RevolvingDot
        height='100'
        width='100'
        radius='6'
        color='#65cd8a'
        secondaryColor=''
        ariaLabel='revolving-dot-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  )
}

export default Loader
