import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test-front.framework.team/',
  timeout: 1000,
});

export default instance;