import axios from 'axios';

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000'
    : 'https://your-backend-domain.com'; // Replace with your actual backend URL

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // optional if you’re using cookies/auth
});

export default instance;
