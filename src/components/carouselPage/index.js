import React from 'react';
import Carousel from '../carousel';

 const CarouselPage=({listTitulos, 
                      titlesDisplay,
                      haveTitles,
                      haveSeries,
                      carouselIconTitles,
                      carouselIconSeries,
                      listSeries})=> {

  return (
    <div className='w-[57.5%] h-screen bg-gray-950'>
      {titlesDisplay?
        <div>
          <Carousel
            name={"titulos"}
            listTitulos={listTitulos}
            haveList={haveTitles}
            carouselIconTitles={carouselIconTitles}/>
          <Carousel
            name={"videos"}
            haveList={haveSeries}
            listSeries={listSeries}
            carouselIconSeries={carouselIconSeries}/>
        </div>
      : 
        <div className='absolute top-1/2 translate-x-1/2 -translate-y-1/2 ' >
          <h2 className='text-gray-400 text-2xl font-light animate-[sideBarAnimation_0.3s_ease-in-out]'>Comece a digitar para vizualizar sua busca</h2>
        </div>
      }
    </div>
  )
}

export default CarouselPage;
