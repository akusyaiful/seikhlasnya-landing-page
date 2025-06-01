"use client";

import { Box, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { HandHeart, Heart, MessageCircleQuestion, User } from "lucide-react";
import Footer from "./Footer";

const ContactSection = () => {
  const dummyCategories = [
    {
      icon: Heart,
      title: "Donasi",
      description: "Salurkan donasimu kepada berbagai lembaga.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Tanya AI",
      description: "Selalu siap memandumu seputar donasi.",
    },
    {
      icon: HandHeart,
      title: "Aktivitas",
      description: "Dapatkan informasi aktual dari lembaga donasi.",
    },
    {
      icon: User,
      title: "Profil Donatur",
      description:
        "Atur informasi pribadi dan riwayat donasimu dengan mudah dan aman.",
    },
  ];

  return (
    <Box id="contact" w="full" bg={"brand.white"}>
      <Box w="80vw" margin={"auto"}>
        <Text
          color="brand.blue"
          fontSize={{ base: 36, lg: 50 }}
          fontWeight="bold"
        >
          Wujudkan kebaikan bersama seikhlasnya.
        </Text>
        <Text color="brand.grayDark" fontSize={{ base: 16, lg: 20 }} mt={8}>
          Seikhlasnya memudahkanmu untuk berbagi, menjembatani kebaikan untuk
          mereka yang membutuhkan.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
          {dummyCategories.map((category, i) => (
            <HStack align="flex-start" key={i} mb={4}>
              <Icon as={category.icon} boxSize={8} color="brand.blue" />
              <Box key={i} pl={4}>
                <Text fontWeight={700} fontSize={{ base: 16, lg: 20 }} mb={2}>
                  {category.title}
                </Text>
                <Text color="brand.grayDark">{category.description}</Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactSection;
