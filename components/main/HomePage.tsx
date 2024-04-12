"use client"

import React from 'react'
import Card from './Card'
import Carousel from './Carousel'
import cardsData from "../../CardsData"
import CarouselCategory from './CarouselCategory'
import CarouselProducts from './CarouselProducts'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="homePage__div" >
      <div className="homePage__carousel"> 
        <Carousel />
        <div className='homePage__card'>
          {cardsData.map((card, idx) => (
          <Card 
            key={idx} 
            title={card.title} 
            img={card.img} 
            link={"Visualizza tutte le offerte"} />
          ))}
        </div>
        <CarouselProducts />
        <CarouselCategory />
      </div>
    </div>
  )
}

export default HomePage
