import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='screen-height flex flex-col items-center justify-center gap-2'>
        <p className='font-bold text-7xl'>404</p>
        <p className='text-xl'>Opps, page not found</p>
        <Link className='text-primary-100 mt-2' to="/">Back to Home</Link>
    </div>
  )
}

export default NotFound