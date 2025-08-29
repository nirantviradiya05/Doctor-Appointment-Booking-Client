import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://doctor-appointment-booking-server-production.up.railway.app/',
  // any other config
});

export default instance;
