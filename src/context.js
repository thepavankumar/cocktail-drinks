import React, { useState, useContext, useEffect } from 'react'


const url = "www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
   const [loading, setLoading] = useState(true);
   const [searchTerm , setSearchTerm] = useState('a');
   const [cocktail , setCocktail] = useState([]);
   return <AppContext.Provider value={{loading , searchTerm , cocktail , setSearchTerm }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
   return useContext(AppContext)
}

export {AppContext, AppProvider}