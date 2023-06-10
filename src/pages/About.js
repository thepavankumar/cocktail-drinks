import React from 'react'
import { Link } from 'react-router-dom'

import cocktailImage from "../assets/cocktail.jpg"
import cocktailLine from "../assets/cocktail-line.png"

function About() {
  return (
    <div className="bg-white flex flex-wrap container mx-auto  ">
    <div className="w-full sm:w-3/5 md:w-3/5 lg:w-3/5">
      <div className="p-8">
        <h1 className="text-black text-3xl font-bold mb-4">About App</h1>
        <h2 className="text-gray-500 text-xl font-medium mb-4">This  is cocktail search application</h2>
        <p className="text-gray-700 mb-4">
            This  is cocktail search application. used <Link className='text-teal-600'  target='_blank 'to="https://www.thecocktaildb.com/">thecocktaildb
            </Link> API to get cocktail details. <Link className='text-teal-600' target='_blank 'to="https://www.thecocktaildb.com/">thecocktaildb
            </Link> is an open, crowd-sourced database of drinks and cocktails from around the world. They have more than 1000+ drinks around the world.
            <Link className='text-teal-600' target='_blank 'to="https://github.com/pavansuresh/cocktail-drinks"> Please for github code follow the link here </Link>
          <hr className="border-gray-300 my-8"/>
 
        </p>
      </div>
    </div>
    <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5">
      <div className="p-8 flex items-center justify-center">
        <img src={cocktailImage} alt={cocktailImage}/>
      </div>
    </div>
    <div className="w-full my-8 flex justify-center">
        <img src={cocktailLine} alt={cocktailLine} className="object-cover w-96 w-120 max-h-96"/>
    </div>
  </div>
  )
}

export default About