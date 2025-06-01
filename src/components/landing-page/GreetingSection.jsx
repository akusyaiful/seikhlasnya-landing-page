"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import DonationForm from "./DonationForm";

const GreetingSection = () => {
  return (
    <Box w={"full"} position={"relative"} bg={"brand.white"} py={36} id="home">
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
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={{ xl: "row", base: "column" }}
          >
            <Box textAlign={{ lg: "left", base: "center" }}>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: 36, lg: 64 }}
                color="brand.blue"
              >
                Seikhlasnya
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: 36, lg: 64 }}
                mb={{ base: 4, md: 8 }}
              >
                Satu Platform, Beragam Kebaikan.
              </Text>
              <Text
                fontSize={{ base: 16, lg: 20 }}
                color="brand.grayDark"
                mb={{ base: 4, md: 8 }}
              >
                Kemudahan berdonasi dalam satu tempat. Seikhlasnya hadir sebagai
                penghubung yang amanah dan terpercaya antara para donatur dan
                lembaga - lembaga sosial yang profesional dan berdedikasi.
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
            <DonationForm />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default GreetingSection;
