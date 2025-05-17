import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/users';

export const userServices = {
  getUsers: async ({ queryKey }) => {
    const [_key, { params }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}`, {
      params,
    });
    return res;
  },
};

export const USER_QUERY_KEYS = {
  GET_USERS: 'ADMIN_GET_USERS',
};
