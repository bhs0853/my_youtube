import VideoPlayerPage from '../components/VideoPlayerPage.js';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { manageShow } from '../store/menuSlice';
import CommentSection from '../components/CommentSection.js';
import LiveChat from '../components/LiveChat.js';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(manageShow());
  },[]);
  return (
    <div className='flex p-7 w-screen bg-gradient-to-r from-lightgray to-black h-screen overflow-y-auto overflow-x-hidden text-white'>
      <div className='text-white pl-10 pr-7'>
        <VideoPlayerPage id={videoId}/>
        <CommentSection />
      </div>
      <div className='w-96 px-14'>
        <LiveChat />
      </div>
    </div>
  )
}

export default WatchPage;