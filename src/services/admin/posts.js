import { axiosInstance } from '@/utils/axios-instance';

const BASE_URL = '/api/admin/posts';

export const postServices = {
  getPosts: async ({ queryKey }) => {
    const [_key, { params }] = queryKey;
    const res = await axiosInstance.get(`${BASE_URL}`, {
      params,
    });
    return res;
  },
};

export const POST_QUERY_KEYS = {
  GET_POSTS: 'ADMIN_GET_POSTS',
};
