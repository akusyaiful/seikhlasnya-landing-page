import { Box, VStack, Text } from '@chakra-ui/react';
import Lottie from 'lottie-react';

const ComingSoon = () => {
  return (
    <VStack align={'center'} justify="center" h="80vh">
      <Box w="full">
        <Lottie path="/assets/lotties/coming-soon.json" loop autoplay />
      </Box>
      <Text fontSize={'2xl'} fontWeight={'semibold'}>
        Coming Soon
      </Text>
    </VStack>
  );
};

export default ComingSoon;
