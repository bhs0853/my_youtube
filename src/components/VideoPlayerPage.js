import useGetVideoDetails from "../utils/helpers/useGetVideoDetails";
import { viewCountGenerator } from "../utils/helpers/helper";
import user from "../assests/user.png";
import WatchPageShimmer from "./WatchPageShimmer";

const VideoPlayerPage = (id) => {
    const videoData = useGetVideoDetails(id.id); 
    if(videoData.length==0) return (<WatchPageShimmer/>);
    const {title, channelTitle} = videoData?.items[0]?.snippet;
    const {likeCount} = videoData?.items[0]?.statistics;
    return(
        <div>
            <div>
                <iframe className="rounded-lg" width="950" height="450" src={"https://www.youtube.com/embed/"+id.id}
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
            </div>
            <div className="text-white px-3 w-full">
                <div className="py-2 font-medium font-mono">{title}</div>
                <div className="flex justify-between py-1">
                    <div className="flex gap-2">
                        <img src={user} className="h-10 w-10"></img>
                        <div className="px-1">
                            <div className="text-sm">{channelTitle}</div>
                            <div className="text-sm text-center">x subs</div>
                        </div>
                        
                        <button className="py-2 px-5 max-h-10 bg-lightgray rounded-xl">Join</button>
                        <button className="bg-white py-2 px-3 max-h-10 text-black rounded-xl font-medium">Subscribe</button>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div className="py-2 px-5 max-h-10 bg-lightgray flex rounded-xl">
                            <button className="pr-2 border-r border-white">👍🏽 {viewCountGenerator(likeCount)}</button>
                            <button className="pl-2">👎🏽</button>
                        </div>
                        <div>
                            <button className="py-2 px-3 bg-lightgray rounded-lg">Share</button>
                        </div>
                        <div>
                            <button className="py-2 px-3 bg-lightgray rounded-lg">Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-3"/>
        </div>
    );
};

export default VideoPlayerPage;