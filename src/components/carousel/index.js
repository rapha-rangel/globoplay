import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay} from '@fortawesome/free-solid-svg-icons';
import semImagem from '../../assets/semImagem.png';

const Carousel=({name, 
                listTitulos, 
                haveList, 
                carouselIconTitles,
                carouselIconSeries, 
                listSeries})=> {

  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentSerie, setCurrentSerie] = useState(0);
  
  useEffect(()=>{
    setCurrentTitle(0);
    setCurrentSerie(0);
  },[listTitulos, listSeries])

  const handleArrowLeft =(e)=>{
		e.preventDefault();
    if(name === "titulos"){
      if(currentTitle === 0){
        setCurrentTitle(0)
      }else{
        setCurrentTitle(currentTitle-1)
      }
    }else{
      if(currentSerie === 0){
        setCurrentSerie(0)
      }else{
        setCurrentSerie(currentSerie-1)
      }
    }
	}

  const handleArrowRight =(e)=>{
		e.preventDefault();
    if(name ==="titulos"){
      if(currentTitle >= listTitulos.length-6){
        setCurrentTitle(listTitulos.length-6)
      }else{
        setCurrentTitle(currentTitle+1)
      }
    } else{
      if(currentSerie >= listSeries.length -3){
        setCurrentSerie(listSeries.length -3)
      }else{
        setCurrentSerie(currentSerie+1)
      }
    }
		
	}

  return (
    <div className='group/item py-10 grid animate-[sideBarAnimation_0.3s_ease-in-out]'>
      <h3 className={!haveList ?
                      'ml-10 font-semibold text-white capitalize '
                      :'ml-10 transition ease-in-out duration-500 font-semibold text-gray-500 group-hover/item:text-white capitalize'}>
        {name}
      </h3>
      <div className='relative overflow-hidden'>
        {name=== "titulos" ?
          <>
            {carouselIconTitles ?
            <>
              <FontAwesomeIcon 
                className='transition ease-in-out duration-500 absolute z-10 top-[50%] ml-2 text-4xl text-white cursor-pointer opacity-0 group-hover/item:block group-hover/item:opacity-100' 
                icon={faChevronLeft}
                onClick={handleArrowLeft}/>
              <FontAwesomeIcon 
                className='transition ease-in-out duration-500 absolute z-10 top-[50%] right-0 mr-4 text-4xl text-white cursor-pointer opacity-0 group-hover/item:block group-hover/item:opacity-100' 
                icon={faChevronRight}
                onClick={handleArrowRight}/>
            </>
            : ""}
            {!haveList ?
              <p className='pl-10 h-[12.9rem] pt-2 text-lg text-gray-300 font-light'>Não foram encontrados titulos</p>
            :
              <ul className='flex pl-10 transition ease-in-out duration-300 '
                style={{transform:`translateX(-${currentTitle*18}%`}}>
                  {listTitulos.map((title, index)=>{
                    return(
                      <li className='mr-4 transition ease-in-out duration-500  my-2 opacity-50 hover:opacity-100  cursor-pointer'
                        key={index}>
                        {title.Poster === 'N/A'
                          ?
                          <img className='max-w-[7rem] min-w-[7rem] h-[12rem] hover:outline hover:outline-4 hover:outline-white' src={semImagem} alt="title_image"/>
                          :
                          <img className='max-w-[7rem] min-w-[7rem] h-[12rem] hover:outline hover:outline-4 hover:outline-white' src={title.Poster} alt="title_image"/>
                        }
                      </li>
                    )
                  })}
              </ul>
            }
          </>
        :
        <>
        {carouselIconSeries ?
          <>
            <FontAwesomeIcon 
              className='transition ease-in-out duration-500 absolute z-10 top-[50%] ml-2 text-4xl text-white cursor-pointer opacity-0 group-hover/item:block group-hover/item:opacity-100' 
              icon={faChevronLeft}
              onClick={handleArrowLeft}/>
            <FontAwesomeIcon 
              className='transition ease-in-out duration-500 absolute z-10 top-[50%] right-0 mr-4 text-4xl text-white cursor-pointer opacity-0 group-hover/item:block group-hover/item:opacity-100' 
              icon={faChevronRight}
              onClick={handleArrowRight}/>
          </>
          : ""}
          {!haveList ?
              <p className='pl-10 h-[12.9rem] pt-2 text-lg text-gray-300 font-light'>Não foram encontrados series</p>
              :
          <ul className='flex pl-10 transition ease-in-out duration-300'
            style={{transform:`translateX(-${currentSerie*24}%`}}>
            {listSeries.map((video, index)=>{
              return(
                <li className='group transition ease-in-out duration-500 group/list mr-4 hover:bg-white mt-2 pb-8 rounded-b-lg opacity-70 hover:opacity-100  cursor-pointer'
                  key={index}>
                  <div className='relative'>
                    {video.Poster ==='N/A'
                      ?
                      <img className='min-w-[12rem] max-w-[12rem] h-28' src={semImagem} alt="title_image"/>
                      :
                      <img className='min-w-[12rem] max-w-[12rem] h-28' src={video.Poster} alt="title_image"/>
                    }
                    <FontAwesomeIcon className='absolute hidden group-hover:block animate-[sideBarAnimation_0.5s_ease-in-out] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl' icon={faPlay} />
                  </div>
                  <p className='px-2 pt-2 font-semibold text-white group-hover/list:text-gray-700 truncate max-w-[12rem]'>{video.Title}</p>
                </li>
              )
            })}
          </ul>
          }
          </>
        }
      </div>
    </div>
  )
}

export default Carousel;
