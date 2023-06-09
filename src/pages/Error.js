import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-red-500 font-bold mb-8">
      404 Error
    </h1>
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mb-8">
      Oops! Page not found.
    </p>
    <Link to="/" className="text-blue-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      Back to Home Page
    </Link>
  </div>
  )
}

export default Error