import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex flex-row justify-evenly p-10 bg-slate-500'>
        <Link to='/'>
            <div>My Profile</div>
        </Link>
        <Link to='/'>
            <div>About me</div>
        </Link>
        <Link to='/'>
            <div>Contact me</div>
        </Link>
    </nav>
  )
}

export default Header