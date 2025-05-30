"use client";
import { Box, Image, Text } from "@chakra-ui/react";

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
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <Image src={thumbnail} alt={title} h="200px" objectFit="cover" />
      <Box p={4}>
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
        <Text fontSize="sm" color="brand.grayDark">
          {description}
        </Text>
        <Text fontSize="10px" mt={2}>
          {dateCreated}
        </Text>
      </Box>
    </Box>
  );
};

export default ActivityCard;
