"use client";
import { Box, Flex, Text, Image, Button, Stack } from "@chakra-ui/react";

// ActivityCard component
const ActivityCard = ({
  thumbnail,
  author,
  title,
  dateCreated,
  description,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      w="100%"
    >
      <Flex direction="row" align="stretch">
        <Image
          src={thumbnail}
          alt={title}
          w="150px"
          h="100%"
          objectFit="cover"
        />
        <Box p={4} flex="1">
          <Text color="brand.black" fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text
            color="brand.blue"
            fontSize="10px"
            fontWeight="semibold"
            mt={2}
            mb={2}
          >
            {author}
          </Text>
          <Text fontSize="sm" color="brand.gray">
            {description}
          </Text>
          <Text fontSize="10px" mt={2}>
            {dateCreated}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ActivityCard;
