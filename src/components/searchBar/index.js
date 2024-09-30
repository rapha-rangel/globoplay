import { faMagnifyingGlass, faHouse, faTv, faFolder, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';

const SearchBar=()=> {
  const [animationBar, setAnimationBar] = useState(false);

  return (
    <div className='group/bar fixed transition-all duration-300 ease-in-out top-0 bg-gray-950 w-[7%] py-12 h-full hover:w-2/12 border-r-[0.15rem] border-gray-500'
      onMouseEnter={()=>setAnimationBar(true)}
      onMouseLeave={()=>setAnimationBar(false)}>
      <div className='grid items-center content-center h-full'>
        <div className='group/item flex items-center hover:bg-white hover:rounded-r-md px-8 cursor-pointer'>
          <FontAwesomeIcon className='text-gray-400 group-hover/item:text-gray-700 my-7 mr-4 ml-1' 
            icon={faMagnifyingGlass} size="lg" /> 
          <p className={animationBar?
            'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s] group-hover/item:text-gray-700 font-semibold text-lg'
            :'opacity-0 hidden'}>Busca</p>
        </div>
        <div className='group/item flex items-center hover:bg-white px-8 cursor-pointer hover:rounded-r-md '>
          <FontAwesomeIcon icon={faHouse} size="lg"  
            className='text-gray-400 group-hover/item:text-gray-700 my-7 mr-4 ml-1' />
          <p className={animationBar?
            'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s] group-hover/item:text-gray-700 font-semibold text-lg'
            :'opacity-0 hidden'}>Inicio</p>
        </div>
        <div className='group/item flex items-center hover:bg-white px-8 cursor-pointer hover:rounded-r-md '>
          <FontAwesomeIcon icon={faTv} size="lg"  
            className='text-gray-400 group-hover/item:text-gray-700 my-7 mr-4 ml-1' />
          <p className={animationBar?
            'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s] group-hover/item:text-gray-700  font-semibold text-lg'
            :'opacity-0 hidden'}>Agora na TV</p>
        </div>
        <div className='group/item flex items-center hover:bg-white px-8 cursor-pointer hover:rounded-r-md '>
          <FontAwesomeIcon icon={faFolder} size="lg" 
            className='text-gray-400 group-hover/item:text-gray-700 my-7 mr-4 ml-1' />  
          <p className={animationBar?
            'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s] group-hover/item:text-gray-700  font-semibold text-lg'
            :'opacity-0 hidden'}>Categorias</p>
        </div>
        <div className='group/item flex items-center hover:bg-white px-8 cursor-pointer hover:rounded-r-md '>
          <FontAwesomeIcon icon={faCircleUser} size="lg" 
            className='text-gray-400 group-hover/item:text-gray-700 my-7 mr-4 ml-1'/> 
          <p className={animationBar?
            'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s] group-hover/item:text-gray-700  font-semibold text-lg'
            :'opacity-0 hidden'}>Minha Conta</p>
        </div>
      </div>
      <div className='grid items-end px-8'>
      <p className={animationBar?
          'text-gray-400 animate-[sideBarAnimation_1s_ease-in-out_0s]'
          :'opacity-0 hidden'}>sair do globoplay</p>
      </div>
    </div>
  )
}

export default SearchBar;
