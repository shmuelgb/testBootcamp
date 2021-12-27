import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.co/api/films/1/",
});
export default api;
