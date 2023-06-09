import React from 'react'
import cocktailImage from "../assets/cocktail.jpg"
import Loading from "./Loading"
import { useGlobalContext } from '../context'

function CockTailList() {
const {cocktails, loading } =   useGlobalContext();

 if(loading){
   return <Loading/>
 }

  return (
    <div className="container mx-auto py-5 flex flex-col sm:flex-row">
    <div className="bg-white w-full rounded-lg shadow-md mx-2 my-4 sm:my-0 sm:w-1/3">
      <img src={cocktailImage} alt={cocktailImage} className="w-full rounded-t-lg"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Main Heading</h3>
        <p className="text-gray-500 text-sm mb-2">Subheading 1</p>
        <p className="text-gray-500 text-sm mb-4">Subheading 2</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">View info</button>
      </div>
    </div>
    </div>
  )
}

export default CockTailList