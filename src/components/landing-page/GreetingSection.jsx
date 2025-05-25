"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const GreetingSection = () => {
  return (
    <Box w="80vw" bg={"brand.white"} pt={24}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={70} mb={16}>
            Donating is about making a{" "}
            <Text as="span" color="brand.blue">
              Differene.
            </Text>
          </Text>
          <Text fontSize={24} color="brand.grayDark" mb={16}>
            Eu viverra erat fusce tortor cum libero, pharetra. Nunc cursus
            cursus odio convallis aliquam in nunc. Commodo ultrices massa urna
            gravida interdum fringilla massa cum.
          </Text>
          <Button
            type="submit"
            size={{ base: "md", md: "lg" }}
            fontWeight={"semibold"}
            colorPalette={"brand.blue"}
          >
            Donasi Sekarang
          </Button>
        </Box>
        <Image
          width={600}
          height={600}
          src="/assets/images/form-donation.svg"
          alt="logo"
        />
      </Flex>
    </Box>
  );
};

export default GreetingSection;
