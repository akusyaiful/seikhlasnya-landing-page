"use client";

import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Heart, MapPin, HandHeart, User } from "lucide-react";

const ContactSection = () => {
  const dummyCategories = [
    {
      icon: Heart,
      title: "Category 1",
      description: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      icon: MapPin,
      title: "Category 2",
      description: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      icon: HandHeart,
      title: "Category 3",
      description: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
    {
      icon: User,
      title: "Category 4",
      description: "Mattis et aliquam fermentum sed sagittis eu elit mauris.",
    },
  ];

  return (
    <Box id="contact" py={24} w="80vw" bg={"brand.white"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image src="/assets/images/contact-image1.jpg" w={550} />
        <Box>
          <Text color="brand.blue" fontSize={50} fontWeight="bold">
            Let’s make an impact
          </Text>
          <Text color="brand.darkGray" fontSize={18} mt={16}>
            Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros
            vel neque vitae lorem molestie.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={16}>
            {dummyCategories.map((category, i) => (
              <HStack align="flex-start" key={i} mb={4}>
                <Icon as={category.icon} boxSize={8} color="brand.blue" />
                <Box key={i} pl={4}>
                  <Text fontWeight={700} fontSize={18} mb={2}>
                    {category.title}
                  </Text>
                  <Text>{category.description}</Text>
                </Box>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
