import { useSearchParams, Link } from 'react-router-dom';
import SearchPageShimmer from '../components/SearchPageShimmer';
import React from 'react';
import SearchVideoCard from '../components/SearchVideoCard';
import useGetSearchResults from "../utils/helpers/useGetSearchResults";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  // console.log(videoData);
  const videosList = useGetSearchResults(query);
  if(videosList==null || videosList.length <=1 || videosList == undefined){
    return <SearchPageShimmer/>
  }
  return (
    <div className='h-screen pt-5 w-fit flex flex-wrap bg-black overflow-x-hidden overflow-y-auto'>
      {videosList?.items?.map((video)=>{
          return <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}><SearchVideoCard videoinfo={video}/></Link>
      })}
    </div>
  )
}

export default SearchPage;