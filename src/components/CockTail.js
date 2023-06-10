import React from 'react'
import { Link } from 'react-router-dom'

function CockTail({id, image, name, info, glass}) {
  return (
    <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg  hover:shadow-md transition-shadow duration-300">
    <img src={image} alt={name} className="w-full rounded-t-lg"/>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">{info}</p>
      <p className="text-gray-500 text-sm mb-4">{glass}</p>
      <Link to={`/cocktail/${id}`} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md hover:shadow-md">View info</Link>
    </div>
  </div>
  )
}

export default CockTail