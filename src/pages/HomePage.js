import VideoCard from "../components/VideoCard";
import useHomePageVideos from "../utils/helpers/useHomePageVideos";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {Display} from "../store/menuSlice";
import HomePageShimmer from "../components/HomePageShimmer";

const HomePage = () => {
    const videoData = useHomePageVideos();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(Display());
    },[]);
    if(videoData==null || videoData.length<=1){
        return (<HomePageShimmer/>);
    }
    return(           
        <div className="flex flex-wrap justify-between bg-black">
            {videoData.map((video)=>{
                return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video}/></Link>
            })}
        </div>
    );
}

export default HomePage;