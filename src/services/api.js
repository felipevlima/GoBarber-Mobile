import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.95.136.128',
  // baseURL: 'http://localhost:3333',
});

export default api;
