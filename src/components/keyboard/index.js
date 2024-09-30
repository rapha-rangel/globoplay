import React from 'react';
import { faDeleteLeft, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Keyboard =({handleTargetKeyboard, inputRef})=> {

  const espaçoKey =
    <div className='py-2 px-4 flex justify-between'> 
      <FontAwesomeIcon  icon={faSquare} /> 
      espaço
    </div>

  const apagarKey =
    <div className='py-2 px-4 flex justify-between'> 
      <FontAwesomeIcon  icon={faDeleteLeft} />
      apagar
    </div>

  const keyboardKeys =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9,espaçoKey,apagarKey]
  
  return (
    <div className='h-screen w-[42.5%] bg-gray-950 border-r-[0.15rem] border-gray-400 pl-36 py-12'>
      <input
        ref={inputRef}
        className='mb-8 font-bold text-3xl bg-gray-500 text-white outline-none bg-transparent' type="text"  placeholder='Busca'/>
      <div className='mr-10'>
        <ul className='group grid grid-cols-6 [&>*:nth-child(37)]:col-span-3 [&>*:nth-child(38)]:col-span-3'>
          {keyboardKeys.map((keys, index)=>{
            return(
              <li 
                key={index}
                onClick={()=>handleTargetKeyboard(keys)}
                className='border border-gray-400 py-2 px-7 text-gray-400 font-light text-xl hover:bg-white hover:border-white hover:text-gray-700 cursor-pointer'>
                  {keys}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Keyboard;
