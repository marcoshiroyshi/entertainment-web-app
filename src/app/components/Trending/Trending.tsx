import React from 'react'
import Card from '../Card/Card'
import { STrending } from './styles'
import ImageSlider from '../Slider/Slider';


const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
  'https://via.placeholder.com/300x200?text=Image+4',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+5',
  'https://via.placeholder.com/300x200?text=Image+5',
];


function Trending() {
  return (
    <STrending>     
        <h1>Trending</h1>
        <ImageSlider images={images}>
          <Card
            year='Year'
            category='Movie'
            pg='PG'
            title='Beyond Earth'
          />
        </ImageSlider> 
        
      
    </STrending>
  )
}

export default Trending