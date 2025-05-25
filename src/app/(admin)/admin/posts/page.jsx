'use client';

import SimplePagination from '@/components/common/SimplePagination';
import SimpleTable from '@/components/common/SimpleTable';
import { Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import PostFilters from './components/PostFilters';
import { POST_QUERY_KEYS, postServices } from '@/services/admin/posts';

const Posts = () => {
  const [params, setParams] = useState({
    page: 1,
  });

  const { data: postsResponse, isFetching: isFetchingPosts } = useQuery({
    queryKey: [POST_QUERY_KEYS.GET_POSTS, { params }],
    queryFn: postServices.getPosts,
    select: (response) => response.data,
  });

  const postColumns = [
    {
      key: 'id',
      accessorKeys: ['id'],
      title: 'ID',
    },
    {
      key: 'title',
      accessorKeys: ['title'],
      title: 'Judul',
    },
    {
      key: 'author',
      accessorKeys: ['author'],
      title: 'Penulis',
    },
    {
      key: 'updatedAt',
      accessorKeys: ['updatedAt'],
      title: 'Terakhir di Update',
    },
  ];

  return (
    <VStack w="full" alignItems={'flex-start'} gap={8} p={8}>
      <VStack alignItems={'flex-start'} w="full" gap={4}>
        <Text fontSize={24} fontWeight={'semibold'}>
          List Post
        </Text>
        <PostFilters />
        <SimpleTable
          pageSize={10}
          loading={isFetchingPosts}
          columns={postColumns}
          data={postsResponse?.posts}
        />
        <SimplePagination
          count={postsResponse?.pagination?.totalData}
          onPageChange={(newPage) =>
            setParams((prev) => ({
              ...prev,
              page: newPage,
            }))
          }
          page={params.page}
        />
      </VStack>
    </VStack>
  );
};

export default Posts;
