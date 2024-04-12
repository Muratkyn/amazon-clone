"use client"

import React from 'react'
import Card from '../card/Card'
import Carousel from '../carousel/Carousel'
import cardsData from "../../../CardsData"
import CarouselCategory from '../carouselCategory/CarouselCategory'
import CarouselProducts from '../carouselProducts/CarouselProducts'
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
