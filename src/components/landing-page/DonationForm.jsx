"use client";

import SimpleField from "@/components/common/SimpleField";
import { SimpleSelect } from "@/components/common/SimpleSelect";
import { formatCurrency } from "@/utils/formatter";
import {
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";

const DONATION_AMOUNT_OPTIONS = [
  {
    label: formatCurrency(5000),
    value: 5000,
  },
  {
    label: formatCurrency(10000),
    value: 10000,
  },
  {
    label: formatCurrency(15000),
    value: 15000,
  },
  {
    label: formatCurrency(25000),
    value: 25000,
  },
  {
    label: formatCurrency(50000),
    value: 50000,
  },
  {
    label: formatCurrency(100000),
    value: 100000,
  },
];

const DonationForm = () => {
  return (
    <form
      onSubmit={() => window.open("https://seikhlasnya.vercel.app/", "_blank")}
    >
      <Box
        w="full"
        px={{ base: 6, md: 8 }}
        py={{ base: 8, xl: 0 }}
        id="donation-form"
      >
        <VStack
          p={{ base: 4, md: 8 }}
          gap={4}
          bg="brand.white"
          alignItems={"center"}
          w="full"
          shadow={"base"}
          borderRadius={16}
        >
          <Text fontWeight={"semibold"} fontSize={18}>
            Form Donasi
          </Text>
          <SimpleField>
            <SimpleSelect placeholder="Pilih Lembaga Donasi" />
          </SimpleField>

          <Grid w="full" templateColumns="repeat(3, 1fr)" gap={4}>
            {DONATION_AMOUNT_OPTIONS.map((amount) => (
              <Box
                key={amount.value}
                cursor={"pointer"}
                w="full"
                borderRadius={12}
                border={"0.5px solid"}
                borderColor={"brand.gray"}
                px={{ base: 2, md: 4 }}
                py={2}
                textAlign={"center"}
              >
                <Text
                  color="brand.grayDark"
                  fontWeight={"semibold"}
                  fontSize={{ base: 11, md: 14 }}
                >
                  {amount.label}
                </Text>
              </Box>
            ))}
          </Grid>
          <InputGroup startElement="Rp">
            <Input placeholder="Nominal donasi" disabled />
          </InputGroup>
          <Button
            type="submit"
            w="full"
            size={{ base: "md", md: "lg" }}
            fontWeight={"semibold"}
            colorPalette={"brand.blue"}
          >
            Donasi Sekarang
          </Button>
        </VStack>
      </Box>
    </form>
  );
};

export default DonationForm;
