import axios from 'axios';

const api = axios.create({
  baseURL: "https://jopibe-image-mxr5n7vreq-et.a.run.app",
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const idPlanetarium = localStorage.getItem('idPlanetarium');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers.Username = username ? username : '';
  config.headers.IdPlanetarium = idPlanetarium ? idPlanetarium : '';
  return config;
});

export default api;
