import React from 'react'
import SearchForm from '../components/SearchForm'
import CockTailList from '../components/CockTailList'


import { useGlobalContext } from '../context'

function Home() {
  return (
    <div>
      <SearchForm/>
      <CockTailList/>
    </div>
  )
}

export default Home