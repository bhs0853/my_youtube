/**
 * Obeying the single responsibilty principle
 * This component is the main UI component which uses outlet to switch between the
 *      -> videoContainer (which lists down the most popular videos by category & default_category:technology)
 *      -> WatchPage (which contains the video player livechat comments suggested videos)
 *      -> SearchPage (Displays search results)
 */

import { Outlet } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import useOnlineStatus from "./utils/helpers/useOnlineStatus";
import { useSelector } from "react-redux";


const Body = function(){
    const isOnline = useOnlineStatus();
    const showMenu = useSelector(store => store.menu.show);
    if(!isOnline){
        return (<div key="offline" className="my-auto">
                <h1 key="head1 ">🔴Looks you are offline!!!</h1>
                <p key="para1">Please check your internet Connection</p>
            </div>
        )
    }
    return(
        <div className="flex pt-14">
            <div className="fixed">
                <HamburgerMenu/>
            </div>            
            <div className={`${showMenu? `ml-60`:``}`}>
                <Outlet/>
            </div>
        </div> 
    );
};

export default Body;