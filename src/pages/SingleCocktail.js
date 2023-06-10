import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Link , useParams } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {id} = useParams();
  const[loading, setLoading ] = useState(false);
  const[cocktail, setCocktail ] = useState(null);

  useEffect( () => {
        setLoading(true);
        async function getCocktail() {
          try{
             const response = await fetch(`${url}${id}`)
             const data = await response.json();
             console.log(data)
             if(data.drinks){
               const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
              } =  data.drinks[0]
              const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
              ]
              const newCocktail = {
                  name,
                  image,
                  info,
                  category,
                  glass,
                  instructions,
                  ingredients,
              }
              setCocktail(newCocktail)
             }else {
              setCocktail(null)
             }

          }catch(error){
               console.log(error)
          }
          setLoading(false)
        }
        getCocktail() 
  } , [id])

  if(loading){
    return <Loading/>
  }
  if(!cocktail){
    return <h2>no cocktail to display!</h2>
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail

  return (
    <div>
       <div className="pt-16 md:pt-8">
       <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="mb-8">
          <Link
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            to='/'
          >
            Back to Search
          </Link>
        </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img
              src={image}
              alt={name}
              className="max-w-full w-96 rounded-lg"
            />
          </div>
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-700 font-bold mb-2">Name: {name}</p>
            <p className="text-gray-700 font-bold mb-2">Category : {category}</p>
            <p className="text-gray-700 font-bold mb-2">Info : {info}</p>
            <p className="text-gray-700 font-bold mb-2">Glass  : {glass}</p>
            <p className="text-gray-700 font-bold mb-2">Ingredients  : {ingredients.map( (item ,index) => {
              return item ? <span key={index}>{item}</span> : null 
            })}</p>
            <p className="text-gray-700 font-bold mb-2">Instructions  :{instructions}</p>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SingleCocktail