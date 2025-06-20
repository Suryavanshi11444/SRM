import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page Not Found.</p>
      <Link 
        to="/" 
        className="flex items-center bg-white text-purple-800 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-300 transition"
      >
        <FaArrowLeft className="mr-2" /> Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
