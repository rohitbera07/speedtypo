import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://speedtypo-backend.onrender.com', // Your backend base URL
  withCredentials: true, // if you're using cookies or auth headers
});

export default instance;
