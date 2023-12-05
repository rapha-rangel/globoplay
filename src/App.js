import { useEffect, useRef, useState } from 'react';
import db from './components/db.json'
import SearchBar from './components/searchBar';
import Keyboard from './components/keyboard';
import CarouselPage from './components/carouselPage';

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [listTitulos, setListTitulos] =useState([]);
  const [listVideos, setListVideos] =useState([]);
  const [titlesDisplay, setTitlesDisplay] = useState(false);
  const [haveList, setHaveList]=useState(false);
  const [carouselIconTitles, setCarouselIconTitles] =useState(true);
  const [carouselIconVideos, setCarouselIconVideos] =useState(true);


  const handleTargetKeyboard =(e)=>{
    if(typeof e === "object"){
      if(e.props.children[1]=== "apagar"){
        setInputValue(inputValue.substring(0, inputValue.length-1))
        inputRef.current.value= inputValue.substring(0, inputValue.length-1)
      } else{
        setInputValue(inputValue+" ")
        inputRef.current.value= inputValue+" "
      }
    } else{
      setInputValue((prev)=>prev+e)
      inputRef.current.value = inputValue+e
    }
  }

  useEffect(()=>{
    const resultsTitles = db.titles.filter((resp) => 
    resp.title.toLowerCase().includes(inputRef.current.value)
    )
    const resultsVideos = db.videos.filter((resp) => 
    resp.title.toLowerCase().includes(inputRef.current.value)
    )
    if(inputRef.current.value.length ===0){
      console.log(inputRef.current.value)
      setListTitulos("");
      setListVideos("");
      setTitlesDisplay(false)
    }else{
      setTitlesDisplay(true)
      setListTitulos(resultsTitles)
      setListVideos(resultsVideos)
    }
    if(resultsTitles.length < 1 ){
      setHaveList(false)
    }else{
      setHaveList(true)
    }
    if(resultsTitles.length >5){
      setCarouselIconTitles(true)
    } else {
      setCarouselIconTitles(false)
    }
    if(resultsVideos.length >5){
      setCarouselIconVideos(true)
    } else {
      setCarouselIconVideos(false)
    }
  },[inputValue])

  return (
    <div className='flex'> 
      <SearchBar/>
      <Keyboard
        inputRef={inputRef}
        handleTargetKeyboard={handleTargetKeyboard}/>
      <CarouselPage
        listTitulos={listTitulos}
        listVideos={listVideos}
        titlesDisplay={titlesDisplay}
        haveList={haveList}
        carouselIconTitles={carouselIconTitles}
        carouselIconVideos={carouselIconVideos}/>
    </div>
  );
}

export default App;
