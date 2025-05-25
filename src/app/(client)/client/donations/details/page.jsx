
import { Box } from '@chakra-ui/react';
import DetailsCard from '@/components/client/donation-card/details-card'; // Ubah path sesuai projectmu ya!

const Details = () => {
  return (
    <Box p="30px">
      <DetailsCard
        organizationName="Lazismu Universitas Muhammadiyah Semarang"
        date="09 April 2025, 19:00 WIB"
        paymentMethod="Gopay"
        donationId="#2ds7d68s76dsd6dsds"
        // status="paid"
        logoSrc="/assets/images/lazismu.jpg"
        address={
          <>
            Lazismu Universitas Muhammadiyah Semarang
            <br />
            Gedung K (GKB) | UNIMUS, Jalan Kedungmundu Nomor 18,
            <br />
            Kedungmundu, Kecamatan Tembalang, Kota Semarang, Jawa Tengah 50273
          </>
        }
      />
    </Box>
  );
};

export default Details;
