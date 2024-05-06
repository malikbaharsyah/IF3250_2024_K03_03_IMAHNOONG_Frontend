import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default api;
