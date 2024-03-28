//them
import React from 'react'
import Carousel from './Carousel'
//us
import Cards from './Cards'
import CarouselCategory from './CarouselCategory'
import CarouselProducts from './CarouselProducts'


const HomePage = () => {
  return (
    <div className="bg-amazonColors-backgroundColor" >
        <div className="m-auto min-w-[1000px] max-w-[1500px]"> 
            <Carousel />
            <div className='grid grid-cols-3 xl:grid-cols-4 -mt-60'>
                <Cards 
                  title={"Offerte in evidenza"}
                  img={"/images/amazon-card-image-1.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Offerte su prodotti in Sport"}
                  img={"/images/amazon-card-image-2.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Le tue promozioni"}
                  img={"/images/amazon-card-image-3.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                title={"Offerte Iscriviti e Risparmia"}
                img={"/images/amazon-card-image-1.jpg"}
                link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Film fantastici su Prime"}
                  img={"/images/amazon-card-image-5.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Piattaforma per i gamers"}
                  img={"/images/amazon-card-image-6.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Studente? Risparmia il 50% "}
                  img={"/images/amazon-card-image-7.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
                <Cards 
                  title={"Incluso con Prime"}
                  img={"/images/amazon-card-image-8.jpg"}
                  link={"Visualizza tutte le offerte"}
                />
            </div>
        <CarouselProducts />
        <CarouselCategory />
        </div>
    </div>
  )
}

export default HomePage
