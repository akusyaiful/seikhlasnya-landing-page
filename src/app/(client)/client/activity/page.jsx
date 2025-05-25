import { Box, Flex, Text, Image, Button, Stack } from "@chakra-ui/react";
import ActivityCard from "@/components/client/activity-card";

const Activity = () => {
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
    <Box px={{ base: 5, md: 20 }} py={10}>
      {/* Header */}
      <Box textAlign="center" mb={12}>
        <Text fontSize="3xl" fontWeight="bold">
          Ikuti Aktivitas{" "}
          <Text as="span" color="brand.blue">
            Terbaru
          </Text>
        </Text>
        <Text color="brand.gray" mt={2}>
          Lihat bagaimana donasimu membawa perubahan nyata bagi mereka yang
          membutuhkan.
        </Text>
      </Box>

      {/* Main Highlight */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
        mb={12}
      >
        <Box flex="1">
          <Text color="brand.black" fontSize="lg" fontWeight="bold">
            Memastikan ketersediaan obat untuk semua anak
          </Text>
          <Text color="brand.blue" fontSize="sm" fontWeight="bold" mt={2}>
            Ainaya Dewi Fatmawati
          </Text>
          <Text mt={3} color="brand.gray">
            Kami berkomitmen memastikan setiap anak memiliki akses ke
            obat-obatan yang mereka butuhkan, tanpa harus terhambat oleh biaya
            maupun jarak.
          </Text>
          <Button mt={5} backgroundColor="brand.blue" color="white">
            Read Now
          </Button>
        </Box>
        <Box flex="1">
          <Image
            src="/assets/images/hero.jpeg"
            alt="Hero"
            borderRadius="md"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </Flex>

      {/* Card List as rows */}
      <Stack spacing={6}>
        {dummyCards.map((card, i) => (
          <ActivityCard key={i} {...card} />
        ))}
      </Stack>

      <Box textAlign="right" mt={8}>
        <Button variant="link" color="brand.blue">
          See More →
        </Button>
      </Box>
    </Box>
  );
};

export default Activity;