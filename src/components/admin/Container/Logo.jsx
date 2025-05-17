import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Flex
      height={20}
      gap={2}
      justifyContent={'flex-start'}
      alignItems={'center'}
      mb={4}
      px={2}
      pt={2}
    >
      <Image width={50} height={50} src="/assets/images/logo.png" alt="logo" />
      <Text fontSize={18} fontWeight={'semibold'}>
        Seikhlasnya
      </Text>
    </Flex>
  );
};

export default Logo;
