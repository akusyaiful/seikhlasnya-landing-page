"use client";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { LuInstagram, LuLinkedin } from "react-icons/lu";

const Footer = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Image
        src="/assets/images/contact-image1.jpg"
        w={550}
        mb={"-177px"}
        position={"relative"}
        zIndex={1}
      />
      <Box
        backgroundColor={"brand.blue"}
        p={{ base: 8, xl: 24 }}
        position={"relative"}
        zIndex={10}
      >
        <Text color="white" fontSize={{ base: 36, lg: 50 }} fontWeight="bold">
          Be A Part Of Our Journey
        </Text>
        <Text color="white" fontSize={{ base: 16, lg: 20 }} mt={8}>
          Mari bersama kita bantu mereka yang membutuhkan. Sekecil apa pun
          donasi Anda, sangat berarti untuk perubahan besar.
        </Text>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
          mt={16}
          borderTop={"2px solid white"}
          flexDirection={{ xl: "row", base: "column" }}
          pt={2}
        >
          <Flex alignItems={"center"} gap={8}>
            <Link
              href={"#home"}
              style={{
                color: "white",
              }}
              onClick={() => handleSelectMenu("home")}
            >
              Home
            </Link>
            <Link
              href={"#about-us"}
              style={{
                color: "white",
              }}
              onClick={() => handleSelectMenu("about-us")}
            >
              About
            </Link>
            <Link
              href={"#activity"}
              style={{
                color: "white",
              }}
              onClick={() => handleSelectMenu("activity")}
            >
              Activity
            </Link>
            <Link
              href={"#contact"}
              style={{
                color: "white",
              }}
              onClick={() => handleSelectMenu("contact")}
            >
              Contact
            </Link>
          </Flex>
          <Flex
            alignItems={"center"}
            gap={{ base: 2, lg: 4 }}
            flexDirection={{ lg: "row", base: "column" }}
          >
            <Button variant="plain">
              <Flex alignItems={"center"} gap={2}>
                <LuInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/ainaya.d_/",
                      "_blank"
                    );
                  }}
                />
                <Text color="white">Ainaya Dewi F</Text>
              </Flex>
            </Button>
            <Button variant="plain">
              <Flex alignItems={"center"} gap={2}>
                <LuInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/musyafa_619/",
                      "_blank"
                    );
                  }}
                />
                <Text color="white">Khoirul Musyafa</Text>
              </Flex>
            </Button>
            <Button variant="plain">
              <Flex alignItems={"center"} gap={2}>
                <LuInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/ihsanmoes/",
                      "_blank"
                    );
                  }}
                />
                <Text color="white">M Ihsan Mushaffa</Text>
              </Flex>
            </Button>
            <Button variant="plain">
              <Flex alignItems={"center"} gap={2}>
                <LuInstagram
                  color="white"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/msyaifllh_/",
                      "_blank"
                    );
                  }}
                />
                <Text color="white">Muhammad Syaifullah</Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
