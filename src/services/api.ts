import  axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '17bfe1aa067b4833a46ca275608c017c'
  }
});

export default api;