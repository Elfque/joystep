import axios from "axios";

const axiosInstance = axios.create({
  // timeout: 10000,
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getRequest = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const delRequest = async (url, params = {}) => {
  try {
    const response = await axiosInstance.delete(url, { params });
    return response.data;
  } catch (error) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const postRequest = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const putRequest = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const patchRequest = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};
