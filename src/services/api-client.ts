import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5fd5d93d4116444ca58ca490d3a730b3',
  },
});

export default apiClient;
