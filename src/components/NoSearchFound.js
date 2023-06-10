import React from 'react'

function NoSearchFound() {
  return (
    <div className="text-center">
    <h1 className="text-xl md:text-2xl mb-10">Unfortunately, there are no relevant results for your search!</h1>
    <span role="img" aria-label="sad face" className="text-2xl md:text-4xl mt-4">😞</span>
    <p className="mt-2">Please try searching again.</p>
  </div>
  )
}

export default NoSearchFound