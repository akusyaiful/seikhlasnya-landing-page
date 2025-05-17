'use client';

import SummaryCard from '@/components/admin/SummaryCard';
import SimpleTable from '@/components/common/SimpleTable';
import StatusTag from '@/components/common/StatusTag';
import { SUMMARY_QUERY_KEYS, summaryServices } from '@/services/admin/summary';
import { formatCurrency, formatNumber } from '@/utils/formatter';
import { getPaymentStatusProperty } from '@/utils/payment-status';
import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import {
  ArrowLeftRightIcon,
  HandCoinsIcon,
  UsersRoundIcon,
} from 'lucide-react';
import SummaryFilters from './components/SummaryFilters';
import Image from 'next/image';
import dayjs from 'dayjs';

const Dashboard = () => {
  const { data: summary, isFetching: isFetchingSummary } = useQuery({
    queryKey: [SUMMARY_QUERY_KEYS.GET_SUMMARY],
    queryFn: summaryServices.getSummary,
    select: (response) => response.data.summary,
  });

  const latestDonationColumns = [
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
      key: 'createdAt',
      accessorKeys: ['createdAt'],
      title: 'Tanggal',
      render: (createdAt) => dayjs(createdAt).format('DD/MM/YYYY'),
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
          Ringkasan
        </Text>

        <SummaryFilters />

        <HStack w="full" gap={4}>
          <SummaryCard
            label={'Nominal Donasi'}
            value={formatCurrency(summary?.totalDonationAmount)}
            icon={<HandCoinsIcon color="var(--se-colors-brand-white)" />}
            loading={isFetchingSummary}
          />
          <SummaryCard
            label={'Jumlah Transaksi'}
            value={formatNumber(summary?.totalDonationCount)}
            icon={<ArrowLeftRightIcon color="var(--se-colors-brand-white)" />}
            loading={isFetchingSummary}
          />
          <SummaryCard
            label={'Jumlah Pendonasi'}
            value={formatNumber(summary?.totalDonor)}
            icon={<UsersRoundIcon color="var(--se-colors-brand-white)" />}
            loading={isFetchingSummary}
          />
        </HStack>
      </VStack>
      <VStack alignItems={'flex-start'} w="full" gap={4}>
        <Text fontSize={24} fontWeight={'semibold'}>
          Donasi Terbaru
        </Text>
        <SimpleTable
          pageSize={5}
          loading={isFetchingSummary}
          columns={latestDonationColumns}
          data={summary?.latestDonations}
        />
      </VStack>
    </VStack>
  );
};

export default Dashboard;
