import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: BASE_URL, // This uses your backend URL from the env file
});

export default api;
