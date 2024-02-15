import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
       <div className="flex items-center justify-center h-screen">
      <div className="text-center">
      <img className="mx-auto w-1/5" src="/assets/oops.jpg" alt="photo here" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for might be under construction or does not exist.</p>
        <Link to="/admin" className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl font-bold hover:bg-blue-600 transition duration-300">Go to Home</Link>
      </div>
    </div>
    </div>
  )
}
export default ErrorPage
