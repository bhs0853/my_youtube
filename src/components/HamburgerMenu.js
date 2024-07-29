/**
 * 
 * This is the hamburger menu which displays the video categories 
 * This hamburger menu is toggled accordingly and the state is managed by redux store
 * This hamburger menu also serves as the input to which category of popular videos to e displyed in the videoContainer
 */

import Home from "../assests/home.svg";
import Shorts from "../assests/explore.svg";
import Subscriptions from "../assests/subscriptions.svg";
import you from "../assests/you.svg";
import History from "../assests/history.svg";
import Trending from "../assests/liked.svg";
import Shopping from "../assests/shopping.svg";
import Music from "../assests/music.svg";
import Movies from "../assests/premium.svg";
import Live from "../assests/live.svg";
import Gaming from "../assests/gaming.svg";
import News from "../assests/yourVideos.svg";
import Sports from "../assests/sports.svg";
import Courses from "../assests/subscriptions.svg";
import Podcasts from "../assests/live.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVideoCategory } from "../store/menuSlice";
import { Link } from "react-router-dom";

const HamburgerMenu = function(){
    const showMenu = useSelector(store => store.menu.show);
    const dispatch = useDispatch();
    const updateVideoCategory = function(info){
        dispatch(setVideoCategory(info));
    }
    if(!showMenu) return null;
    return(
        <Link to="/">
        <div className="w-60 bg-black h-screen fixed overflow-scroll cursor-pointer">
            <div className="text-white mx-2 w-11/12 py-3">
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto bg-lightgray px-3 py-2 flex rounded-lg" onClick={() => updateVideoCategory(28)}>
                    <img src={Home}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Home</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={Shorts}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Shorts</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex ">
                    <img src={Subscriptions}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Subscriptions</span>
                </div>
            </div>
            <hr className="w-11/12 border mx-auto border-lightgray"></hr>
            <div className="text-white mx-2 w-11/12 py-3">
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex">
                    <img src={you}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">You</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={History}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">History</span>
                </div>
            </div>
            <hr className="w-11/12 border mx-auto border-lightgray"></hr>
            <div className="text-white mx-2 w-11/12 py-3">
                <div className="ml-3 ">Explore</div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex" onClick={() => updateVideoCategory(24)}>
                    <img src={Trending}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Trending</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex " onClick={() => updateVideoCategory(19)}>
                    <img src={Shopping}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Travel</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex " onClick={() => updateVideoCategory(10)}>
                    <img src={Music}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Music</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex" onClick={() => updateVideoCategory(30)}>
                    <img src={Movies}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Movies</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex " onClick={() => updateVideoCategory(22)}>
                    <img src={Live}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Blogs</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex " onClick={() => updateVideoCategory(20)}>
                    <img src={Gaming}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Gaming</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex " onClick={() => updateVideoCategory(25)}>
                    <img src={News}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">News</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex " onClick={() => updateVideoCategory(17)}>
                    <img src={Sports}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Sports</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex" onClick={() => updateVideoCategory(27)}>
                    <img src={Courses}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Education</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex " onClick={() => updateVideoCategory(44)}>
                    <img src={Podcasts}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Trailers</span>
                </div>
            </div>
        </div>
        </Link>
    );
}
export default HamburgerMenu;