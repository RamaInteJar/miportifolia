import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <h1 className='text-3xl text-white'>My Profile</h1>
    <nav className='flex flex-row justify-evenly p-10 bg-slate-500'>
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/Aboutme'>
            <div>About me</div>
        </Link>
        <Link to='/Contact'>
            <div>Contact me</div>
        </Link>
        <Link to='/Projects'>
            <div>Projects</div>
        </Link>
    </nav>

    </header>
  )
}

export default Header