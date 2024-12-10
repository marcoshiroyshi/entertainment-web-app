import React from 'react'
import Card from '../Card/Card'
import { STrending } from './styles'

function Trending() {
  return (
    <STrending>
        <h1>Trending</h1>
        <Card
          year='Year'
          category='Movie'
          pg='PG'
          title='Beyond Earth'
        />

    </STrending>
  )
}

export default Trending