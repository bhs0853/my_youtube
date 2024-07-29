/**
 * This is the VideoCard Component (UI component)
 * This card displays the thumbnails
 * and related data of the video
 */
import moment from 'moment';
import { viewCountGenerator } from '../utils/helpers/helper';

const VideoCard = function(info){
    const {channelTitle,title,thumbnails,publishedAt} = info.info.snippet;
    let {viewCount} = info.info.statistics;    
    return(
        <div className="VideoCard h-68 w-80 flex flex-col py-2 px-4 text-white cursor-pointer">
            <img className="h-3/5 w-full rounded-md hover:rounded-none" src={thumbnails.high.url}></img>
            <div className="pt-0.5 flex flex-wrap overflow-hidden max-h-12">{title}</div>
            <div className=" text-channel hover:text-white">{channelTitle}</div>
            <div className="text-channel">{viewCountGenerator(viewCount)} views . {moment(publishedAt).fromNow()}</div>
        </div>
    )
}

export default VideoCard;