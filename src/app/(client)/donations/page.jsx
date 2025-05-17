'use client';

import Appbar from '@/components/client/Appbar';
import BottomNavigation from '@/components/client/BottomNavigation';
import DonationCard from '@/components/client/donation-card';
import UnauthenticatedPage from '@/components/client/UnauthenticatedPage';
import {
  DONATION_QUERY_KEYS,
  donationServices,
} from '@/services/client/donations';
import { useAuthStore } from '@/store/client/auth';
import { Box, VStack, Center, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

const Donations = () => {
  const user = useAuthStore((state) => state.user);

  const { data: donationsResponse, isFetching: isFetchingDonations } = useQuery(
    {
      queryKey: [
        DONATION_QUERY_KEYS.GET_DONATIONS,
        { params: { page: 1, limit: 10 } },
      ],
      queryFn: donationServices.getDonations,
      select: (response) => response.data,
      enabled: user ? true : false,
    }
  );

  return (
    <VStack position={'relative'} minH={'vh'}>
      <Appbar title={'Donasiku'} />
      {isFetchingDonations ? (
        <VStack alignItems={'flex-start'} w="full" mt={20} p={'30px'}>
          <Skeleton w="full" height={20} />
          <Skeleton w="full" height={20} />
          <Skeleton w="3/4" height={20} />
          <Skeleton w="1/2" height={20} />
        </VStack>
      ) : user ? (
        <Box my={16} px={6} w="full">
          {donationsResponse?.donations?.map((donation) => (
            <DonationCard
              organizationName={donation?.organization?.name}
              amount={donation?.amount}
              status={donation?.status}
              createdAt={donation?.createdAt}
            />
          ))}
        </Box>
      ) : (
        <Center h="vh">
          <UnauthenticatedPage />
        </Center>
      )}

      <BottomNavigation />
    </VStack>
  );
};

export default Donations;
