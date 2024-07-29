import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { YOUTUBE_DATA_API } from "../config";

const useHomePageVideos = () => {
    const videoCategory = useSelector(store => store.menu.videoCategory);
    console.log(videoCategory);
    const [videoData,setVideoData] = useState([]);
    useEffect(()=>{
        getData();
    },[videoCategory]);
    const getData = async function(){
        const data = await fetch(YOUTUBE_DATA_API+videoCategory);
        const jsonData =await data.json();
        // console.log(YOUTUBE_DATA_API);
        console.log(jsonData.items);
        setVideoData(jsonData?.items);
        console.log(YOUTUBE_DATA_API+videoCategory);
    }
    return videoData;
}

export default useHomePageVideos;