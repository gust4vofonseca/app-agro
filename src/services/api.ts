import axios from 'axios';

const url = 'http://localhost:7000';
const token = localStorage.getItem('@Precato:token');

const api = axios.create({
  baseURL: url,
  headers: {
    authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  },
});

export default api;
