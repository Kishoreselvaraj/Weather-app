import React from 'react'
import './search.scss'
// import { useState } from 'react'
function Search({setsearch}) {
  
  return (
    <div className='searchBar'>
        <input className='search' type="search" spellCheck="false" placeholder='Enter Your City'onChange={(e)=>setsearch(e.target.value)}/>
    </div>
  )
}

export default Search