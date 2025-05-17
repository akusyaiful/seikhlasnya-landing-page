import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/donations';

export const donationServices = {
  getDonations: async ({ queryKey }) => {
    const [_key, { params }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}`, {
      params,
    });
    return res;
  },
};

export const DONATION_QUERY_KEYS = {
  GET_DONATIONS: 'ADMIN_GET_DONATIONS',
};
