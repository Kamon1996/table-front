import axios from "axios";

export const api = axios.create({
  baseURL: "https://desolate-sea-74870.herokuapp.com/",
});
