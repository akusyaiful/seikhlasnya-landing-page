import { Box, Flex, Text } from '@chakra-ui/react';
import { Prose } from '../SimpleProse';

const BubbleChat = ({ content, type }) => (
  <Flex w="full" justifyContent={type === 'user' ? 'flex-end' : 'flex-start'}>
    <Box
      maxW="4/5"
      p={type === 'user' ? '12px' : '0px 12px'}
      bgColor={type === 'user' ? 'brand.blue' : 'brand.gray'}
      borderRadius={
        type === 'user' ? '12px 12px 0px 12px' : '12px 12px 12px 0px'
      }
    >
      {type === 'system' ? (
        <Prose dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <Text color={'brand.white'}>{content}</Text>
      )}
    </Box>
  </Flex>
);

export default BubbleChat;
