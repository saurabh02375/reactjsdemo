import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='text-light '>Home</div>
    <div className='text-light '><Link to='/register'>Register</Link></div>

    </>
  )
}

export default Home