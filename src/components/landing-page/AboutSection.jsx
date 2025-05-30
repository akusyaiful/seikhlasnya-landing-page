"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box w="80vw" bg={"brand.white"} py={24} id="about-us">
      <Text fontWeight={"bold"} color="brand.blue" fontSize={20}>
        About Us
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ lg: "row", base: "column" }}
      >
        <Text
          fontWeight={"bold"}
          fontSize={{ base: 36, md: 50 }}
          w={{ base: "full", lg: "60%" }}
          mb={{ base: 8, lg: 0 }}
        >
          Kami hadir untuk mendampingi setiap langkah{" "}
          <Text as={"span"} color="brand.blue">
            muliamu.
          </Text>
        </Text>
        <Button
          size={{ base: "md", md: "lg" }}
          fontWeight={"semibold"}
          colorPalette={"brand.blue"}
          onClick={() => {
            window.open("https://seikhlasnya.vercel.app/", "_blank");
          }}
        >
          Donasi Sekarang
        </Button>
      </Flex>
    </Box>
  );
};

export default AboutSection;
