import  axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a4154e6394994f1182f94bf5db76f997'
  }
});

export default api;