'use client';

import Appbar from '@/components/client/Appbar';
import {
  DONATION_QUERY_KEYS,
  donationServices,
} from '@/services/client/donations';
import { VStack, Box, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const DonationPayment = () => {
  const { donationId } = useParams();

  const { data: donationResponse, isFetching: isFetchingDonation } = useQuery({
    queryKey: [
      DONATION_QUERY_KEYS.GET_DONATION_DETAIL,
      {
        donationId,
      },
    ],
    queryFn: donationServices.getDonationDetail,
    select: (response) => response.data,
  });

  return (
    <VStack position={'relative'} minH={'vh'}>
      <Appbar title={'Pembayaran'} />
      <Box h={'90vh'} w="100%" mt={14}>
        {isFetchingDonation ? (
          <Box p={12} h="full" w="full">
            <Skeleton h="full" w="full" />
          </Box>
        ) : (
          <iframe
            src={donationResponse?.donation?.payment?.paymentUrl}
            width={'100%'}
            height={'100%'}
          />
        )}
      </Box>
    </VStack>
  );
};

export default DonationPayment;
