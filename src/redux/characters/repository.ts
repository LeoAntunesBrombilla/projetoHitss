/* Repositories are classes or components that encapsulate the logic required to access data sources. */

import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://swapi.dev/api/people/',
});

export default todoApi;
