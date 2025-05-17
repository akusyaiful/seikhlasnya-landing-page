import { Box, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';

const SummaryCard = ({ label, value, icon, loading }) => {
  return (
    <Box
      w="full"
      bg="brand.white"
      p={4}
      borderRadius={12}
      shadow={'base'}
      h={100}
    >
      <HStack justifyContent={'space-between'} h="full">
        <VStack alignItems={'flex-start'}>
          <Text>{label}</Text>
          {loading ? (
            <Skeleton height={6} w="full" />
          ) : (
            <Text fontSize={24} fontWeight={'medium'}>
              {value}
            </Text>
          )}
        </VStack>
        {icon && (
          <Box borderRadius={'full'} bg="brand.blue" p={2}>
            {icon}
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default SummaryCard;
