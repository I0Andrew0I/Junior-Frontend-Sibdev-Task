import Axios from "axios";

const youtubeApi = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 5000,
});

export default youtubeApi;
