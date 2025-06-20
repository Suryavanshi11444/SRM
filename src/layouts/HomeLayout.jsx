import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='bg-gradient-to-r from-purple-600 to-purple-800 p-5 text-white flex justify-between items-center'>

        <nav className="flex space-x-6 text-xl">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/contact">Contact</Link>
        </nav>

        <div>
          <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-purple-700 px-3 py-2 rounded">
            <FaBars className="text-2xl" />
            <span className="hidden md:inline">Dashboard</span> 
          </Link>
        </div>

      </header>

      <div className="flex-grow">
        <Outlet />
      </div>

      <footer className='bg-purple-900 p-5 text-white text-center'>
        Ecommerce Footer
      </footer>
    </div>
  )
}

export default HomeLayout;
