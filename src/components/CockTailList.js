import React from 'react'
import Loading from "./Loading"
import CockTail from "./CockTail"
import { useGlobalContext } from '../context'
import NoSearchFound from './NoSearchFound';

function CockTailList() {
const {cocktails, loading } =   useGlobalContext();
 if(loading){
   return <Loading/>
 }

 if(cocktails.length < 1 ){
   return <NoSearchFound/>
 }

  return (
    <div className="container mx-auto py-5 flex flex-col sm:flex-row">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
       {cocktails.map((drink) => {
        return <CockTail key={drink.id} {...drink}/>
       })}
       </div>
    </div>
  )
}

export default CockTailList