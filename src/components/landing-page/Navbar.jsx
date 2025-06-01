"use client";

import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Portal,
} from "@chakra-ui/react";
import { AlignJustifyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
    setOpen(false);
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
      <Flex
        justifyContent={{ base: "space-between", md: "space-around" }}
        alignItems={"center"}
        px={{ base: 8, md: 0 }}
      >
        <Image
          width={70}
          height={70}
          src="/assets/images/logo.png"
          alt="logo"
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Link
            href={"#home"}
            style={{
              padding: "0px 24px",
              color:
                selectedMenu === "home"
                  ? "var(--se-colors-brand-blue)"
                  : "var(--se-colors-brand-gray-dark)",
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
                  : "var(--se-colors-brand-gray-dark)",
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
                  : "var(--se-colors-brand-gray-dark)",
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
                  : "var(--se-colors-brand-gray-dark)",
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
          display={{ base: "none", md: "block" }}
        >
          Donasi Sekarang
        </Button>
        <Drawer.Root
          size={"xs"}
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
        >
          <Drawer.Trigger asChild>
            <Button
              display={{ base: "flex", md: "none" }}
              w="40px"
              colorPalette={"brand.blue"}
              borderRadius="50%"
            >
              <AlignJustifyIcon />
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/logo.png"
                    alt="logo"
                  />
                </Drawer.Header>
                <Drawer.Body>
                  <Flex flexDirection={"column"} gap={4}>
                    <Link
                      href={"#home"}
                      style={{
                        color:
                          selectedMenu === "home"
                            ? "var(--se-colors-brand-blue)"
                            : "var(--se-colors-brand-gray-dark)",
                      }}
                      onClick={() => handleSelectMenu("home")}
                    >
                      Home
                    </Link>
                    <Link
                      href={"#about-us"}
                      style={{
                        color:
                          selectedMenu === "about-us"
                            ? "var(--se-colors-brand-blue)"
                            : "var(--se-colors-brand-gray-dark)",
                      }}
                      onClick={() => handleSelectMenu("about-us")}
                    >
                      About
                    </Link>
                    <Link
                      href={"#activity"}
                      style={{
                        color:
                          selectedMenu === "activity"
                            ? "var(--se-colors-brand-blue)"
                            : "var(--se-colors-brand-gray-dark)",
                      }}
                      onClick={() => handleSelectMenu("activity")}
                    >
                      Activity
                    </Link>
                    <Link
                      href={"#contact"}
                      style={{
                        color:
                          selectedMenu === "contact"
                            ? "var(--se-colors-brand-blue)"
                            : "var(--se-colors-brand-gray-dark)",
                      }}
                      onClick={() => handleSelectMenu("contact")}
                    >
                      Contact
                    </Link>
                  </Flex>
                  <Button
                    size={"md"}
                    w={"full"}
                    mt={8}
                    fontWeight={"semibold"}
                    colorPalette={"brand.blue"}
                    onClick={() => {
                      window.open("https://seikhlasnya.vercel.app/", "_blank");
                    }}
                  >
                    Donasi Sekarang
                  </Button>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </Box>
  );
};

export default Navbar;
