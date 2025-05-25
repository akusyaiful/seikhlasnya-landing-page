'use client';

import SimplePagination from '@/components/common/SimplePagination';
import SimpleTable from '@/components/common/SimpleTable';
import StatusTag from '@/components/common/StatusTag';
import {
  DONATION_QUERY_KEYS,
  donationServices,
} from '@/services/admin/donations';
import { getPaymentStatusProperty } from '@/utils/payment-status';
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import DonationFilters from './components/DonationFilters';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatter';
import dayjs from 'dayjs';

const Donations = () => {
  const [params, setParams] = useState({
    page: 1,
  });

  const { data: donationsResponse, isFetching: isFetchingDonations } = useQuery(
    {
      queryKey: [DONATION_QUERY_KEYS.GET_DONATIONS, { params }],
      queryFn: donationServices.getDonations,
      select: (response) => response.data,
    }
  );

  const donationColumns = [
    {
      key: 'id',
      accessorKeys: ['id'],
      title: 'ID',
    },
    {
      key: 'user',
      accessorKeys: ['user', 'fullName'],
      title: 'Donatur',
    },
    {
      key: 'organization',
      accessorKeys: ['organization'],
      title: 'Lembaga Donasi',
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
      key: 'amount',
      accessorKeys: ['amount'],
      title: 'Jumlah',
      render: (amount) => formatCurrency(amount),
    },
    {
      key: 'createdAt',
      accessorKeys: ['createdAt'],
      title: 'Tanggal',
      render: (createdAt) => dayjs(createdAt).format('DD/MM/YYYY'),
    },
    {
      key: 'status',
      accessorKeys: ['status'],
      title: 'Status',
      render: (status) => {
        const statusProperty = getPaymentStatusProperty(status);
        return (
          <StatusTag
            colorPallete={statusProperty.colorPallete}
            label={statusProperty.label}
          />
        );
      },
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
          List Donasi
        </Text>
        <DonationFilters />
        <SimpleTable
          pageSize={10}
          loading={isFetchingDonations}
          columns={donationColumns}
          data={donationsResponse?.donations}
        />
        <SimplePagination
          count={donationsResponse?.pagination?.totalData}
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

export default Donations;
