
import React, { useEffect, useState } from 'react';
import { VIDEO_DETAILS_API } from '../config';

const useGetVideoDetails = (id) => {
  const [videoDetails,setVideoDetails] = useState([]);
    useEffect(()=>{
        getVideoDetails(id);
    },[id]);
    const getVideoDetails = async (id) =>{
        const data = await fetch( VIDEO_DETAILS_API+id);
        const jsonData =await data.json();
        //console.log(jsonData);
        setVideoDetails(jsonData);
    }
    // setVideoDetails({
    //     "kind": "youtube#videoListResponse",
    //     "etag": "iXrnhRVX_eUeqlfkku60QSnefHI",
    //     "items": [
    //         {
    //             "kind": "youtube#video",
    //             "etag": "S9a33W6z1VhOQBydlm8YCIcxLMg",
    //             "id": "D5CGlFQbgnk",
    //             "snippet": {
    //                 "publishedAt": "2024-05-15T12:30:16Z",
    //                 "channelId": "UCWX0cUR2rZcqKei1Vstww-A",
    //                 "title": "How to master WEB3 in 2024 (Complete Roadmap and Syllabus)",
    //                 "description": "In this video, we will deep dive into the syllabus and prerequisites for learning Web3 from scratch, what are the things needed to learn web3, projects to build while learning web3, use cases of Web3,  layer 0, 1, and 2 blockchains, and many more.\n\nTimestamps:-\n\n00:00 - Overview of the topic\n01:17 - Layers of Blockchains\n04:49 - #1 Use cases of Web3\n06:47 - #2 Use cases of Web3\n07:49 - #3 Use cases of Web3\n08:02-  #4 Use cases of Web3\n09:00 - #Some more use cases of Web3\n11:04 - Mental model to learn web3\n14:36 - (0 to 1) Syllabus of Web3 cohort \n20:34 - (1 to 100) Syllabus of Web3 cohort\n27:01 - Free Resources to learn Web3\n\n\n\nLinks:\nOpen Source Cohort: https://harkirat.classx.co.in/\nTwitter:https://twitter.com/kirat_tw\nLinkedin:https://linkedin.com/in/kirat-li\nInstagram:https://www.instagram.com/kirat_ins/\nDiscord:https://discord.com/invite/WAaXacK9bh\nTelegram: https://t.me/kirat_internal_group",
    //                 "thumbnails": {
    //                     "default": {
    //                         "url": "https://i.ytimg.com/vi/D5CGlFQbgnk/default.jpg",
    //                         "width": 120,
    //                         "height": 90
    //                     },
    //                     "medium": {
    //                         "url": "https://i.ytimg.com/vi/D5CGlFQbgnk/mqdefault.jpg",
    //                         "width": 320,
    //                         "height": 180
    //                     },
    //                     "high": {
    //                         "url": "https://i.ytimg.com/vi/D5CGlFQbgnk/hqdefault.jpg",
    //                         "width": 480,
    //                         "height": 360
    //                     },
    //                     "standard": {
    //                         "url": "https://i.ytimg.com/vi/D5CGlFQbgnk/sddefault.jpg",
    //                         "width": 640,
    //                         "height": 480
    //                     },
    //                     "maxres": {
    //                         "url": "https://i.ytimg.com/vi/D5CGlFQbgnk/maxresdefault.jpg",
    //                         "width": 1280,
    //                         "height": 720
    //                     }
    //                 },
    //                 "channelTitle": "Harkirat Singh",
    //                 "categoryId": "27",
    //                 "liveBroadcastContent": "none",
    //                 "localized": {
    //                     "title": "How to master WEB3 in 2024 (Complete Roadmap and Syllabus)",
    //                     "description": "In this video, we will deep dive into the syllabus and prerequisites for learning Web3 from scratch, what are the things needed to learn web3, projects to build while learning web3, use cases of Web3,  layer 0, 1, and 2 blockchains, and many more.\n\nTimestamps:-\n\n00:00 - Overview of the topic\n01:17 - Layers of Blockchains\n04:49 - #1 Use cases of Web3\n06:47 - #2 Use cases of Web3\n07:49 - #3 Use cases of Web3\n08:02-  #4 Use cases of Web3\n09:00 - #Some more use cases of Web3\n11:04 - Mental model to learn web3\n14:36 - (0 to 1) Syllabus of Web3 cohort \n20:34 - (1 to 100) Syllabus of Web3 cohort\n27:01 - Free Resources to learn Web3\n\n\n\nLinks:\nOpen Source Cohort: https://harkirat.classx.co.in/\nTwitter:https://twitter.com/kirat_tw\nLinkedin:https://linkedin.com/in/kirat-li\nInstagram:https://www.instagram.com/kirat_ins/\nDiscord:https://discord.com/invite/WAaXacK9bh\nTelegram: https://t.me/kirat_internal_group"
    //                 },
    //                 "defaultAudioLanguage": "en"
    //             },
    //             "contentDetails": {
    //                 "duration": "PT29M4S",
    //                 "dimension": "2d",
    //                 "definition": "hd",
    //                 "caption": "false",
    //                 "licensedContent": false,
    //                 "contentRating": {},
    //                 "projection": "rectangular"
    //             },
    //             "statistics": {
    //                 "viewCount": "105317",
    //                 "likeCount": "3288",
    //                 "favoriteCount": "0",
    //                 "commentCount": "316"
    //             }
    //         }
    //     ],
    //     "pageInfo": {
    //         "totalResults": 1,
    //         "resultsPerPage": 1
    //     }
    // });
  return videoDetails;
}

export default useGetVideoDetails