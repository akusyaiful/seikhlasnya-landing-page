'use client';

import SimpleAvatar from '@/components/common/SimpleAvatar';
import { useAuthStore } from '@/store/client/auth';
import { Box, Button, HStack, Mark, Text, VStack } from '@chakra-ui/react';

const GreetingSection = () => {
  const { user } = useAuthStore((state) => state);

  const handleDonateNow = () => {
    const element = document.getElementById('donation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      px={{ base: 8, md: 8 }}
      py={12}
      bg="brand.blue"
      w="full"
      borderBottomRadius={18}
      backgroundImage={`url('/assets/images/logo-background.png')`}
      backgroundRepeat={'no-repeat'}
      backgroundPositionX={{ base: 250, md: 350 }}
      backgroundPositionY={40}
      backgroundSize={{ base: '380px 300px', md: '400px 320px' }}
      pb={32}
    >
      {user && (
        <HStack alignItems={'center'} gap={4} mb={20}>
          <SimpleAvatar
            size="xl"
            src={user?.profilePic}
            name={user?.fullName}
          />
          <Text
            maxW={{ base: '4/5', md: '3/5' }}
            color="brand.white"
            fontWeight={'semibold'}
            fontSize={{ base: 20, md: 24 }}
          >
            Hi, {user?.fullName?.split(' ')?.[0]}
          </Text>
        </HStack>
      )}

      <VStack alignItems={'center'} mt={user ? 0 : 28} gap={4}>
        <Text
          textAlign={'center'}
          fontSize={32}
          fontWeight={'semibold'}
          color="brand.white"
          w={{ base: '4/5', md: '3/4' }}
        >
          Selangkah untuk sebuah{' '}
          <Mark
            bgGradient="to-bl"
            gradientFrom="#2BC0E4"
            gradientTo="#EAECC6"
            bgClip="text"
          >
            Kebaikan
          </Mark>
        </Text>
        <Text
          textAlign={'center'}
          color="brand.white"
          w={{ base: '4/5', md: '3/4' }}
          fontSize={14}
        >
          Setiap langkah kecilmu berarti besar bagi mereka yang sedang
          membutuhkan.
        </Text>

        <Button
          my={8}
          size={'xl'}
          variant={'solid'}
          colorPalette={'brand.white'}
          onClick={handleDonateNow}
        >
          Donasi Sekarang
        </Button>
      </VStack>
    </Box>
  );
};

export default GreetingSection;
