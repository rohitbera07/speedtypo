import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend base URL
  withCredentials: true, // if you're using cookies or auth headers
});

export default instance;
