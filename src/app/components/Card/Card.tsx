import React from 'react'
import { SCard } from './styles'


function Card({ year, category, pg, title }: CardProps) {
  return (
    <SCard>
      <div className='card-att'>
        <p>{year}</p>
        <span></span>
        <p>{category}</p>
        <span></span>
        <p>{pg}</p>
      </div>
      <p>{title}</p>
      
    </SCard>
  )
}

export default Card