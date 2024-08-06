// named export 
export const API_KEY = "AIzaSyDpyPS8Rm-5EUf6EKEhfhVayAuaE7QDoG0";
export const BASE_URL = "https://www.googleapis.com/youtube/v3"
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export default API_KEY; // default export