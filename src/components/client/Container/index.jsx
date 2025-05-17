'use client';

import { Box } from '@chakra-ui/react';
import SplashScreen from '@/components/common/SplashScreen';
import { useInitialize } from '../../../hooks/client/use-initialize';
import UnauthenticatedModal from '../UnauthenticatedModal';

export const CLIENT_CONTAINER_MAX_WIDTH = '600px';

const Container = ({ children }) => {
  const { isLoadingInit } = useInitialize();
  if (isLoadingInit) {
    return (
      <Box bg="brand.grayLighter">
        <SplashScreen />
      </Box>
    );
  }

  return (
    <Box
      w="full"
      bg={'brand.grayLight'}
      display={'flex'}
      justifyContent={'center'}
    >
      <Box
        display="flex"
        flexDirection="column"
        w="full"
        maxWidth={CLIENT_CONTAINER_MAX_WIDTH}
        minHeight="100vh"
        bg={'brand.white'}
      >
        {children}
        <UnauthenticatedModal />
      </Box>
    </Box>
  );
};

export default Container;
