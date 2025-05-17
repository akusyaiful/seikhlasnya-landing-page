import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const isAdmin = window.location.pathname.includes('/admin');
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }

    if (isAdmin && error?.response?.status === 401) {
      localStorage.clear();
      window.location.replace('/admin/auth/login');
    }

    if (isAdmin && error?.response?.status === 403) {
      localStorage.clear();
      window.location.replace('/admin/auth/login');
    }

    return Promise.reject({
      message: error?.response?.data?.message || 'Something went wrong',
      status: error?.response?.status,
    });
  }
);
