'use client';

import SimplePagination from '@/components/common/SimplePagination';
import SimpleTable from '@/components/common/SimpleTable';
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import OrganizationFilters from './components/OrganizationFilters';
import Image from 'next/image';
import {
  ORGANIZATION_QUERY_KEYS,
  organizationServices,
} from '@/services/admin/organizations';

const Organizations = () => {
  const [params, setParams] = useState({
    page: 1,
  });

  const {
    data: organizationsResponse,
    isFetching: isFetchingOrganizations,
  } = useQuery({
    queryKey: [ORGANIZATION_QUERY_KEYS.GET_ORGANIZATIONS, { params }],
    queryFn: organizationServices.getOrganizations,
    select: (response) => response.data,
  });

  const organizationColumns = [
    {
      key: 'id',
      accessorKeys: ['id'],
      title: 'ID',
    },
    {
      key: 'name',
      title: 'Lembaga',
      render: (organization) => (
        <Flex alignItems={'center'} gap={4}>
          <Image
            src={organization.logoPic}
            width={40}
            height={20}
            alt={organization.name}
          />
          <Text>{organization.name}</Text>
        </Flex>
      ),
    },
    {
      key: 'address',
      accessorKeys: ['address'],
      title: 'Alamat Lembaga',
    },
    {
      key: 'action',
      title: 'Action',
      align: 'center',
      render: () => (
        <Flex gap={0} justifyContent={'center'}>
          <Button variant={'ghost'} colorPalette={'brand.blue'}>
            Edit
          </Button>
          <Button variant={'ghost'} colorPalette={'brand.red'}>
            Hapus
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <VStack w="full" alignItems={'flex-start'} gap={8} p={8}>
      <VStack alignItems={'flex-start'} w="full" gap={4}>
        <Text fontSize={24} fontWeight={'semibold'}>
          List Lembaga Donasi
        </Text>
        <OrganizationFilters />
        <SimpleTable
          pageSize={10}
          loading={isFetchingOrganizations}
          columns={organizationColumns}
          data={organizationsResponse?.organizations}
        />
        <SimplePagination
          count={organizationsResponse?.pagination?.totalData}
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

export default Organizations;
