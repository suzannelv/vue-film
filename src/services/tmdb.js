import axios from "axios";

export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  headers: {
    Accept: "application/json"
  },
  params: {
    api_key: '1178ff8918bc325e7a4879abff99f3b7'
  }
 })