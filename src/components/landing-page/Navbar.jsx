"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <Box
      w="full"
      boxShadow={"base"}
      position={"fixed"}
      bg={"brand.white"}
      top={0}
      zIndex={99}
    >
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Image
          width={70}
          height={70}
          src="/assets/images/logo.png"
          alt="logo"
        />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link
            href={"#home"}
            style={{
              padding: "0px 24px",
              color:
                selectedMenu === "home"
                  ? "var(--se-colors-brand-blue)"
                  : "black",
            }}
            onClick={() => handleSelectMenu("home")}
          >
            Home
          </Link>
          <Link
            href={"#about-us"}
            style={{
              padding: "0px 24px",
              color:
                selectedMenu === "about-us"
                  ? "var(--se-colors-brand-blue)"
                  : "black",
            }}
            onClick={() => handleSelectMenu("about-us")}
          >
            About
          </Link>
          <Link
            href={"#activity"}
            style={{
              padding: "0px 24px",
              color:
                selectedMenu === "activity"
                  ? "var(--se-colors-brand-blue)"
                  : "black",
            }}
            onClick={() => handleSelectMenu("activity")}
          >
            Activity
          </Link>
          <Link
            href={"#contact"}
            style={{
              padding: "0px 24px",
              color:
                selectedMenu === "contact"
                  ? "var(--se-colors-brand-blue)"
                  : "black",
            }}
            onClick={() => handleSelectMenu("contact")}
          >
            Contact
          </Link>
        </Flex>
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

export default Navbar;
