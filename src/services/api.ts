import axios from 'axios';

const url = 'http://192.168.2.165:7000';
const token = localStorage.getItem('@Precato:token');

const api = axios.create({
  baseURL: url,
});

export default api;
