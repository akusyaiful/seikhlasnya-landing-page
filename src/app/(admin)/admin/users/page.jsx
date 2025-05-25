'use client';

import SimplePagination from '@/components/common/SimplePagination';
import SimpleTable from '@/components/common/SimpleTable';
import { Button, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import UserFilters from './components/UserFilters';
import { USER_QUERY_KEYS, userServices } from '@/services/admin/users';

const Users = () => {
  const [params, setParams] = useState({
    page: 1,
  });

  const { data: usersResponse, isFetching: isFetchingUsers } = useQuery({
    queryKey: [USER_QUERY_KEYS.GET_USERS, { params }],
    queryFn: userServices.getUsers,
    select: (response) => response.data,
  });

  const userColumns = [
    {
      key: 'id',
      accessorKeys: ['id'],
      title: 'ID',
    },
    {
      key: 'fullName',
      accessorKeys: ['fullName'],
      title: 'Nama Lengkap',
    },
    {
      key: 'email',
      accessorKeys: ['email'],
      title: 'Email',
    },
    {
      key: 'action',
      title: 'Action',
      align: 'center',
      render: () => (
        <Button variant={'ghost'} colorPalette={'brand.blue'}>
          Detail
        </Button>
      ),
    },
  ];

  return (
    <VStack w="full" alignItems={'flex-start'} gap={8} p={8}>
      <VStack alignItems={'flex-start'} w="full" gap={4}>
        <Text fontSize={24} fontWeight={'semibold'}>
          List Donatur
        </Text>
        <UserFilters />
        <SimpleTable
          pageSize={10}
          loading={isFetchingUsers}
          columns={userColumns}
          data={usersResponse?.users}
        />
        <SimplePagination
          count={usersResponse?.pagination?.totalData}
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

export default Users;
