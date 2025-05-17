import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/organizations';

export const organizationServices = {
  getOrganizations: async ({ queryKey }) => {
    const [_key, { params }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}`, {
      params,
    });
    return res;
  },
};

export const ORGANIZATION_QUERY_KEYS = {
  GET_ORGANIZATIONS: 'CLIENT_GET_ORGANIZATIONS',
};
