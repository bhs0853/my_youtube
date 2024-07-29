import React, { useEffect, useState } from 'react'
import { SEARCH_PAGE_API } from '../config';

const useGetSearchResults = (query) => {
  const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        getSearchResults();
    },[query]);
    const getSearchResults = async () =>{
        const data = await fetch(SEARCH_PAGE_API+query);
        const json = await data.json();
        //console.log(json);
        setSearchResults(json);
    }
  return searchResults;
}

export default useGetSearchResults