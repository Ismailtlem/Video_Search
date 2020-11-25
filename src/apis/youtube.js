import axios from "axios";

/*const KEY = "AIzaSyCr6Vgooc4Nv5FluOpvDdS4yn9PFPxFpec"; */
const KEY = "AIzaSyAPMTJOMXqWEc8IWjydNp7uj8_1F63hoJY"; 

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
