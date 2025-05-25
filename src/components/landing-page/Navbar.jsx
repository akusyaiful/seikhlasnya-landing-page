"use client";

import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      w="full"
      boxShadow={"base"}
      position={"fixed"}
      bg={"brand.white"}
      top={0}
    >
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Image
          width={70}
          height={70}
          src="/assets/images/logo.png"
          alt="logo"
        />
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link href={"/"} style={{ padding: "0px 24px" }}>
            Home
          </Link>
          <Link href={"/"} style={{ padding: "0px 24px" }}>
            About
          </Link>
          <Link href={"/"} style={{ padding: "0px 24px" }}>
            Activity
          </Link>
          <Link href={"/"} style={{ padding: "0px 24px" }}>
            Donation
          </Link>
        </Flex>
        <Button
          type="submit"
          size={{ base: "md", md: "lg" }}
          fontWeight={"semibold"}
          colorPalette={"brand.blue"}
        >
          Donasi Sekarang
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
