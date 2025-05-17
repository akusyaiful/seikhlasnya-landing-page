import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/auth';

export const authServices = {
  getMe: async () => {
    const res = await axiosInstance.get(`${BASE_URL}/me`);
    return res;
  },

  login: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/login`, payload);
    return res;
  },

  logout: async () => {
    const res = await axiosInstance.post(`${BASE_URL}/logout`);
    return res;
  },
};

export const AUTH_QUERY_KEYS = {
  GET_ME: 'ADMIN_GET_ME',
};
