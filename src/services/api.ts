import axios from 'axios';

const url = 'http://localhost:7000';
const token = localStorage.getItem('@Precato:token');

const api = axios.create({
  baseURL: url,
});

export default api;
