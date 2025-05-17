import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/summary';

export const summaryServices = {
  getSummary: async () => {
    const res = await axiosInstance.get(`${BASE_URL}`);
    return res;
  },
};

export const SUMMARY_QUERY_KEYS = {
  GET_SUMMARY: 'ADMIN_GET_SUMMARY',
};
