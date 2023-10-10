import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex flex-row justify-evenly'>
        <Link to='/'>
            <div>My Profile</div>
        </Link>
        <Link to='/'>
            <div>About me</div>
        </Link>
    </nav>
  )
}

export default Header