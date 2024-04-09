"use client"
//them
import React from 'react'
import Carousel from './Carousel'
//us
import Card from './Card'
import CarouselCategory from './CarouselCategory'
import CarouselProducts from './CarouselProducts'
import cardsData from "../../CardsData"
import "./HomePage.css"


const HomePage = () => {
  return (
    <div className="homePage_div" >
        <div className="homePage_carousel"> 
            <Carousel />
            <div className='homePage_card'>
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
