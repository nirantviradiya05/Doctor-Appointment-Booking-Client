// src/api.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const fetchDoctors = async () => {
  return await api.get('/doctor/list');
};

export default api;
