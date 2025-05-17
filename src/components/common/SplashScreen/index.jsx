import { Box, Center } from '@chakra-ui/react';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <Center h="vh">
      <Box animation="bounce">
        <Image
          width={50}
          height={50}
          src="/assets/images/logo.png"
          alt="logo"
        />
      </Box>
    </Center>
  );
};

export default SplashScreen;
