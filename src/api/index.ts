import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export default todoApi;
