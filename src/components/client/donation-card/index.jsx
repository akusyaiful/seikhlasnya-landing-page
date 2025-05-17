import { Box, Button, Flex, Separator, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useMemo } from 'react';

const DonationCard = ({ organizationName, amount, status, createdAt }) => {
  const tagStyle = useMemo(() => {
    if (status === 'pending') {
      return {
        backgroundColor: 'status.yellowBg',
        color: 'status.yellow',
      };
    }
    if (status === 'paid') {
      return {
        backgroundColor: 'status.greenBg',
        color: 'status.green',
      };
    }
    if (status === 'failed') {
      return {
        backgroundColor: 'status.redBg',
        color: 'status.red',
      };
    }
    return {
      backgroundColor: 'status.yellowBg',
      color: 'status.yellow',
    };
  }, [status]);

  const tagLabel = useMemo(() => {
    if (status === 'pending') {
      return 'Belum di Bayar';
    }
    if (status === 'paid') {
      return 'Berhasil';
    }
    if (status === 'failed') {
      return 'Gagal';
    }
    return 'Pending';
  }, [status]);

  return (
    <Box
      bg="brand.white"
      border={'1px solid'}
      borderColor={'brand.gray'}
      borderRadius={'12px'}
      p="20px"
      mb="20px"
      position={'relative'}
      maxW={'600px'}
      m="20px auto"
    >
      <Text color="brand.blue" fontWeight={'bold'} fontSize={'13px'} mb="5px">
        DONASI
      </Text>
      <Text fontSize={'16px'} fontWeight={'semibold'}>
        {organizationName}
      </Text>
      <Text color="brand.grayDark" fontSize={'13px'} mb="10px">
        {dayjs(createdAt).format('DD/MM/YYYY, hh:mm A')}
      </Text>
      <Separator />
      <Box
        position={'absolute'}
        top={'20px'}
        right="20px"
        p="5px 10px"
        borderRadius={'6px'}
        fontSize={'12px'}
        fontWeight={'bold'}
        {...tagStyle}
      >
        {tagLabel}
      </Box>
      <Flex alignItems={'center'} justifyContent={'space-between'} mt="15px">
        <Box>
          <Text fontSize={'13px'} color="brand.gray" m={0}>
            Jumlah Donasi
          </Text>
          <Text fontSize={'16px'} color="brand.blue" fontWeight={'bold'} m={0}>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(amount)}
          </Text>
        </Box>
        {status !== 'failed' && (
          <Button colorPalette={'brand.blue'}>
            {status === 'paid' ? 'Detail' : 'Pay'}
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default DonationCard;
