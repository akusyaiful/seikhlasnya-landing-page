import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import ActivityCard from "./ActivityCard";

const ActivitySection = () => {
  const dummyCards = [
    {
      thumbnail: "/assets/images/card1.jpeg",
      author: "Ainaya Dewi Fatmawati",
      dateCreated: "27 Agustus 2024",
      title: "Membuat akses air bersih",
      description: "Membangun sumber mata air yang layak pakai.",
    },
    {
      thumbnail: "/assets/images/card2.jpeg",
      author: "Ainaya Dewi Fatmawati",
      dateCreated: "29 Juni 2024",
      title: "Warga Terdampak Banjir",
      description:
        "Bantuan ini menjadi harapan bagi warga untuk tetap bertahan di tengah kondisi darurat.",
    },
    {
      thumbnail: "/assets/images/card3.jpeg",
      author: "Ainaya Dewi Fatmawati",
      dateCreated: "1 Mei 2025",
      title: "Renovasi Ruang Kelas",
      description:
        "Semangat belajar mereka tumbuh kembali berkat kebaikan Anda.",
    },
  ];

  return (
    <Box w="80vw" bg={"brand.white"} py={24} id="activity">
      <Text textAlign="center" fontSize={36} fontWeight={"bold"}>
        Ikuti Perkembangan{" "}
        <Text as="span" color="brand.blue">
          Terbaru
        </Text>
      </Text>
      <Text
        textAlign="center"
        color="brand.grayDark"
        mt={8}
        fontSize={{ base: 16, lg: 20 }}
      >
        Transparansi donasi yang dapat dipantau setiap saat
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={16}
        gap={32}
        flexDirection={{ lg: "row", base: "column" }}
      >
        <Box>
          <Text fontSize={32} fontWeight={700}>
            Memastikan tersedianya obat-obatan untuk semua anak.
          </Text>
          <Text
            color="brand.grayDark"
            mt={{ base: 4, md: 8 }}
            fontSize={{ base: 16, lg: 20 }}
          >
            Kami berkomitmen untuk memastikan setiap anak memiliki akses
            terhadap obat-obatan yang layak demi kesehatan dan masa depan
            mereka.
          </Text>
        </Box>
        <Image
          src="/assets/images/card1.jpeg"
          alt="image"
          height={300}
          width={300}
          objectFit="cover"
        />
      </Flex>
      <Stack
        gap={{ base: 8, lg: 16 }}
        align="stretch"
        mt={16}
        direction={{ base: "column", md: "row" }}
      >
        {dummyCards.map((card, i) => (
          <ActivityCard key={i} {...card} />
        ))}
      </Stack>
    </Box>
  );
};

export default ActivitySection;
