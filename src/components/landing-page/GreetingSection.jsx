"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const GreetingSection = () => {
  return (
    <Box w={"full"} position={"relative"} bg={"brand.white"} py={24} id="home">
      <Image
        width={100}
        height={100}
        src="/assets/images/ellipse1.svg"
        alt="logo"
        style={{ position: "absolute", left: 0 }}
      />
      <Image
        width={100}
        height={100}
        src="/assets/images/ellipse2.svg"
        alt="logo"
        style={{ position: "absolute", left: 40, bottom: 20 }}
      />
      <Image
        width={100}
        height={100}
        src="/assets/images/ellipse3.svg"
        alt="logo"
        style={{ position: "absolute", right: 100, bottom: 100 }}
      />
      <Flex justifyContent={"center"}>
        <Box w="80vw">
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
                cursus odio convallis aliquam in nunc. Commodo ultrices massa
                urna gravida interdum fringilla massa cum.
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
            </Box>
            <Image
              width={600}
              height={600}
              src="/assets/images/form-donation.svg"
              alt="logo"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default GreetingSection;
