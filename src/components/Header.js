/**
 * 
 * This is the header component (UI component)
 * which container the search component which employs youtube search api to get the search results
 * make the search results functional too
 * 
 * optimisations excepted ->
 *    follow the srp such the the search results logic should be populated using a custom hook 
 *    so that the logic can be abstracted from the layer 
 *    if the above is not done along with singke responsibility principle, open closed principle is also violated
 */

import React,{useEffect, useState} from 'react';
import YouTubeLogo from '../assests/Youtube-Logo.svg';
import search from "../assests/search.svg";
import HamburgerIcon from "../assests/hamburger.svg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShow } from '../store/menuSlice';
import Suggestions from './Suggestions';
import { SEARCH_SUGGESTIONS_API } from '../utils/config';
import { cacheResults } from '../store/suggestionsSlice';


const Header = () => {
  const [login,setLogin] = useState(true);
  const[searchText, setSearchText] = useState('');
  const[showSuggestions,setShowSuggestions] = useState(false);
  const searchSuggestions = useSelector(store => store.suggestions);
  const[suggestions,setSuggestions] = useState([
    "india live match",
    "india tv live",
    "indian army",
    "indian flag",
    "indian movies",
    "india world cup match",
    "india",
]);
  const dispatch = useDispatch();
  const handleToggleMenu = ()=>{
    dispatch(toggleShow());
  }
  useEffect(()=>{
    
    const timer = setTimeout(() => {
      if(searchSuggestions[searchText]){
        setSuggestions(searchSuggestions[searchText]);
      }
      else{
        getSearchSuggestions(searchText)
      } 
    },200);
    return () => {
      clearTimeout(timer);
    }
  },[searchText]);


  const getSearchSuggestions = async (searchText) =>{
    if(searchText.length<1 || searchText == '') return [
      "india live match",
    "india tv live",
    "indian army",
    "indian flag",
    "indian movies",
    "india world cup match",
    "india",
    ];
    const data = await fetch(SEARCH_SUGGESTIONS_API+searchText);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1].splice(0,7));
    dispatch(cacheResults({
      [searchText]:json[1],
    }))
  }
  return (
    <div className="bg-black flex h-14 w-full px-7 justify-between fixed">
      <div className='flex'>
        <img src={HamburgerIcon} className="my-auto cursor-pointer" key="hamburger" onClick={()=>handleToggleMenu()}></img>
        <Link to="/"><img src={YouTubeLogo} className='mx-5 h-16 w-20'></img></Link>
      </div>
      <div className='my-auto  flex w-2/5'>
        <div className='border-lightgray border h-9 rounded-l-3xl w-full bg-searchbackground text-white'>
          <input className='border-lightgray pl-5 h-9 rounded-l-3xl w-full bg-searchbackground text-white' 
          onChange={(e) => {setSearchText(e.target.value)}}
          onFocus={()=>{setShowSuggestions(true)}}
          onBlur={()=>{setShowSuggestions(false)}}
          onInput={()=>{setShowSuggestions(true)}}
          placeholder='Search'>
          </input>
          <div className={`${showSuggestions?'block sticky':'hidden'} my-1.5 mx-0.5 rounded-md bg-searchtext min-h-0 hover:block hover:sticky`}>
              {
                suggestions.map((info,index)=>{
                  return(
                    <Link to={"/results?search_query="+info} key={info+index}><Suggestions info={info}/></Link>
                  );
                })
              }
          </div>
        </div>
        <Link to={"/results?search_query="+searchText}>
          <button className='border-lightgray bg-lightgray border-l-0 border h-9 rounded-r-3xl  px-5'>
            <img src={search}></img>
          </button>
        </Link>
      </div>
      <div className='my-auto w-28'>
        <button className='border w-full border-lightgray bg-lightgray px-5 py-1.5 rounded-3xl text-blue-400 font-medium' onClick={()=>{setLogin(!login)}}>{login?<>Sign In</>:<>Sign Out</>}</button>
      </div>
    </div>
  )
}
export default Header;