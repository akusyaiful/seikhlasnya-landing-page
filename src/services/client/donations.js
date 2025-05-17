import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/donations';

export const donationServices = {
  getDonations: async ({ queryKey }) => {
    const [_key, { params }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}`, {
      params,
    });
    return res;
  },
  getDonationDetail: async ({ queryKey }) => {
    const [_key, { donationId }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}/${donationId}`);
    return res;
  },
  createDonation: async (payload) => {
    const res = await axiosInstance.post(`${BASE_URL}/create`, payload);
    return res;
  },
};

export const DONATION_QUERY_KEYS = {
  GET_DONATIONS: 'CLIENT_GET_DONATIONS',
  GET_DONATION_DETAIL: 'CLIENT_GET_DONATION_DETAIL',
};
