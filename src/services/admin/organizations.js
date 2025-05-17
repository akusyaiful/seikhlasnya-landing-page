import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/organizations';

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
  GET_ORGANIZATIONS: 'ADMIN_GET_ORGANIZATIONS',
};
