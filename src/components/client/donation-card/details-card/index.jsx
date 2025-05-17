import { Box, Text, Flex, Image, Button, Separator } from "@chakra-ui/react";

const DetailsCard = ({
  organizationName,
  date,
  paymentMethod,
  donationId,
  address,
  logoSrc,
}) => {
  return (
    <Box
      bg="brand.white"
      borderColor="brand.gray"
      borderRadius="12px"
      p="20px"
      maxW="600px"
      m="20px auto"
      position="relative"
    >
      <Text
        textAlign="center"
        fontWeight="bold"
        fontSize="24px"
        mb="10px"
        color="brand.black"
      >
        Terima kasih
      </Text>
      <Text textAlign="center" fontSize="16px" color="brand.black" mb="25px">
        Donasi kamu sudah kami terima dan akan kami salurkan
      </Text>

      <Box
        border="1px solid"
        borderColor="brand.gray"
        borderRadius="10px"
        p="20px"
      >
        <Flex justifyContent="space-between" alignItems="flex-start" mb="16px">
          <Box>
            <Text fontSize="12px" color="brand.blue" fontWeight="bold">
              DONASI
            </Text>
            <Text fontSize="16px" fontWeight="semibold" color="brand.black">
              {organizationName}
            </Text>
            <Text fontSize="13px" color="brand.gray">
              a.n. Musyafa
            </Text>
          </Box>
          <Box
            p="5px 10px"
            borderRadius="6px"
            fontSize="12px"
            fontWeight="bold"
            backgroundColor="status.greenBg"
            color="status.green"
          >
            Berhasil
          </Box>
        </Flex>

        <Separator mb="16px" />

        <Box fontSize="14px">
          <Flex justifyContent="space-between" mb="10px">
            <Text color="brand.black" fontWeight="medium">
              Tanggal
            </Text>
            <Text fontWeight="bold" color="brand.black">
              {date}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" mb="10px">
            <Text color="brand.black" fontWeight="medium">
              Metode Pembayaran
            </Text>
            <Text fontWeight="bold" color="brand.black">
              {paymentMethod}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text color="brand.black" fontWeight="medium">
              ID Donasi
            </Text>
            <Text fontWeight="bold" color="brand.black">
              {donationId}
            </Text>
          </Flex>
        </Box>

        <Box textAlign="center" mt="20px">
          <Image
            src={logoSrc}
            alt="Logo Organization"
            mx="auto"
            maxW="200px"
            mb="10px"
          />
          <Text fontSize="14px" color="brand.black">
            {address}
          </Text>
        </Box>
      </Box>

      <Button
        mt="25px"
        mx="auto"
        display="block"
        colorPalette="brand.blue"
        borderRadius="6px"
        px="25px"
      >
        Donasi Lagi
      </Button>
    </Box>
  );
};

export default DetailsCard;
