import React from 'react'
import search from "../assests/search.svg";
import { Link } from 'react-router-dom';

const Suggestions = (info) => {
  return ( 
        <button className='flex hover:bg-hovertext py-1 px-5 w-full hover:rounded-lg'>
            <img src={search} className='h-5 mt-0.5 pr-3'></img>
            <div className='text-white'>{info.info}</div>
        </button>
  )
}

export default Suggestions;