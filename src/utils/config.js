
const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

//  export const SEARCH_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

 export const SEARCH_SUGGESTIONS_API = `https://bhs-server.onrender.com/api/suggestions?q=`;

export const SEARCH_PAGE_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&q=`;

export const VIDEO_DETAILS_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${GOOGLE_API_KEY}&videoCategoryId=`;