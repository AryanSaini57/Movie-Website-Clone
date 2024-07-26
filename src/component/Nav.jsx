import React from 'react'
import Logo from "../movie_logo.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex space-x-10 border items-center pl-3 py-2'>
        <Link to="/"><img className='w-[60px]' src={Logo} alt=""/></Link>
        <Link className='text-xl text-blue-500' to="/">Movie</Link>
        <Link className='text-xl text-blue-500' to="/watchlist">WatchList</Link>
    </div>
  )
}

export default Nav