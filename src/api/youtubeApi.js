import Axios from "axios";

export const youtubeApi = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  timeout: 5000,
});

export const apiKey = "AIzaSyDhveQfCjHtqIGZNVFurXX-to6owNA1mqc";
