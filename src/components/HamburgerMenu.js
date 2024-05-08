import Home from "../../assests/home.svg";
import Shorts from "../../assests/explore.svg";
import Subscriptions from "../../assests/subscriptions.svg";
import you from "../../assests/you.svg";
import History from "../../assests/history.svg";
import Trending from "../../assests/liked.svg";
import Shopping from "../../assests/shopping.svg";
import Music from "../../assests/music.svg";
import Movies from "../../assests/premium.svg";
import Live from "../../assests/live.svg";
import Gaming from "../../assests/gaming.svg";
import News from "../../assests/yourVideos.svg";
import Sports from "../../assests/sports.svg";
import Courses from "../../assests/subscriptions.svg";
import Podcasts from "../../assests/live.svg";

const HamburgerMenu = function(){
    return(
        <div className="w-56 bg-black h-screen overflow-y-auto">
            <div className="text-white mx-2 w-11/12 py-3">
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto bg-lightgray px-3 py-2 flex rounded-lg">
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
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={Trending}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Trending</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={Shopping}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Shopping</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex ">
                    <img src={Music}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Music</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex">
                    <img src={Movies}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Movies</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={Live}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Live</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex ">
                    <img src={Gaming}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Gaming</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto px-3 py-2 flex ">
                    <img src={News}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">News</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex ">
                    <img src={Sports}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Sports</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex">
                    <img src={Courses}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Courses</span>
                </div>
                <div className=" hover:bg-lightgray hover:rounded-lg text-sm my-auto  px-3 py-2 flex ">
                    <img src={Podcasts}></img>
                    <span className=" pl-5 font-sans font-medium my-auto">Podcasts</span>
                </div>
            </div>
        </div>
    );
}
export default HamburgerMenu;