import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/auth';

export const authServices = {
  getMe: async () => {
    const res = await axiosInstance.get(`${BASE_URL}/me`);
    return res;
  },
  login: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/login`, payload);
    return res;
  },
  register: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/register`, payload);
    return res;
  },
  logout: async () => {
    const res = await axiosInstance.post(`${BASE_URL}/logout`);
    return res;
  },
  resendVerification: async () => {
    const res = await axiosInstance.post(`${BASE_URL}/resend-verification`);
    return res;
  },
  verifyAccount: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/verify-account`, payload);
    return res;
  },
  forgotPassword: async (payload) => {
    const res = await axiosInstance.post(
      `${BASE_URL}/forgot-password`,
      payload
    );
    return res;
  },
  resetPassword: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/reset-password`, payload);
    return res;
  },
};

export const AUTH_QUERY_KEYS = {
  GET_ME: 'CLIENT_GET_ME',
};
