import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
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
        Stay Up To{" "}
        <Text as="span" color="brand.blue">
          Date
        </Text>
      </Text>
      <Text textAlign="center" color="brand.darkGray" mt={8} fontSize={24}>
        Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel
        neque vitae lorem molestie.
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={16}
        gap={32}
      >
        <Box>
          <Text fontSize={32} fontWeight={700}>
            Ensuring medicine for all the children.
          </Text>
          <Text color="brand.darkgray" mt={16}>
            Facilisis diam ac augue lorem placerat dignissim feugiat amet orci.
            Urna, ante blandit diam in dui, nulla praesent. Dignissim feugiat
            amet orci. Urna,
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
      <HStack gap={16} align="stretch" mt={16}>
        {dummyCards.map((card, i) => (
          <ActivityCard key={i} {...card} />
        ))}
      </HStack>
    </Box>
  );
};

export default ActivitySection;
