"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box w="80vw" bg={"brand.white"} py={24} id="about-us">
      <Text fontWeight={"bold"} color="brand.blue" fontSize={20}>
        About Us
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={"bold"} fontSize={50} w="60%">
          We are here to support{" "}
          <Text as={"span"} color="brand.blue">
            vulnerable
          </Text>{" "}
          communities.
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
