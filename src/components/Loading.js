import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-600 animate-ping mx-10">Loading...</p>
    </div>
  )
}

export default Loading