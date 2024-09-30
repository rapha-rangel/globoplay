import { useEffect, useRef, useState } from 'react';
import SearchBar from './components/searchBar';
import Keyboard from './components/keyboard';
import CarouselPage from './components/carouselPage';
import axios from 'axios';

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [listTitulos, setListTitulos] =useState([]);
  const [listSeries, setListSeries] =useState([]);
  const [titlesDisplay, setTitlesDisplay] = useState(false);
  const [haveTitles, setHaveTitles]=useState(false);
  const [haveSeries, setHaveSeries]=useState(false);
  const [carouselIconTitles, setCarouselIconTitles] =useState(true);
  const [carouselIconSeries, setCarouselIconSeries] =useState(true);


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
    const getAll =async ()=>{
      const responseTitles = await axios.get(`https://www.omdbapi.com/?s=${inputRef.current.value}&plot=short&type=movie&apikey=9db42209`)
      var resultsTitles =[];
      if(responseTitles.data.Search === undefined){
        resultsTitles= [];
        }else{
          resultsTitles = responseTitles.data.Search
        }
        const responseSeries = await axios.get(`https://www.omdbapi.com/?s=${inputRef.current.value}&plot=short&type=series&apikey=9db42209`)
        var resultsSeries =[]
        if(responseSeries.data.Search === undefined){
          resultsSeries= [];
          }else{
            resultsSeries = responseSeries.data.Search;
          }
      if(inputRef.current.value.length ===0){
        setListTitulos(resultsTitles);
        setListSeries(resultsSeries);
        setTitlesDisplay(false)
      }else{
        setTitlesDisplay(true)
        setListTitulos(resultsTitles)
        setListSeries(resultsSeries)
      }
      if(resultsTitles.length < 1 ){
        setHaveTitles(false)
      }else{
        setHaveTitles(true)
      }
      if(resultsSeries.length < 1 ){
        setHaveSeries(false)
      }else{
        setHaveSeries(true)
      }
      if(resultsTitles.length >5){
        setCarouselIconTitles(true)
      } else {
        setCarouselIconTitles(false)
      }
      if(resultsSeries.length >5){
        setCarouselIconSeries(true)
      } else {
        setCarouselIconSeries(false)
      }
    }
    getAll();
  },[inputValue])

  return (
    <div className='flex'> 
      <SearchBar/>
      <Keyboard
        inputRef={inputRef}
        handleTargetKeyboard={handleTargetKeyboard}/>
      <CarouselPage
        listTitulos={listTitulos}
        listSeries={listSeries}
        titlesDisplay={titlesDisplay}
        haveTitles={haveTitles}
        haveSeries={haveSeries}
        carouselIconTitles={carouselIconTitles}
        carouselIconSeries={carouselIconSeries}/>
    </div>
  );
}

export default App;
