import React from 'react'
import { SearchDiv } from './styles'

function Search() {
  return (
    <SearchDiv>
        <img src="/icon-search.svg" alt="input"/>
        <input type="text" name="search" id="" placeholder='Search for movies or TV series'/>
    </SearchDiv>
  )
}

export default Search