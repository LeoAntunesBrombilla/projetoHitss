import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://swapi.dev/api/people/1/',
});

export default todoApi;
