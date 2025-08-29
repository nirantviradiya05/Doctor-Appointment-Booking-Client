import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = '₹';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [userData, setUserData] = useState(null);

  // Fetch doctors from backend
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message || "Failed to load doctors");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong while fetching doctors");
    }
  };

  // Fetch logged in user profile data if token exists
  const loadUserProfileData = async () => {
    if (!token) return;

    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token }
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message || "Failed to load user profile");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong while fetching user profile");
    }
  };

  // Fetch doctors on mount
  useEffect(() => {
    getDoctorsData();
  }, []);

  // Fetch user profile whenever token changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(null);
    }
  }, [token]);

  // Provide context value to children components
  return (
    <AppContext.Provider
      value={{
        doctors,
        getDoctorsData,
        currencySymbol,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
