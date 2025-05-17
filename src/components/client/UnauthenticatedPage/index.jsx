'use client';

import { Button, Text, VStack } from '@chakra-ui/react';
import { ScanFaceIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const UnauthenticatedPage = () => {
  const router = useRouter();
  return (
    <VStack>
      <ScanFaceIcon size={48} color="var(--se-colors-brand-blue)" />
      <Text color="brand.blue" fontSize={24} fontWeight={'semibold'}>
        Ups, kamu belum login
      </Text>
      <Text
        maxW={300}
        textAlign={'center'}
        color={'brand.grayDark'}
        fontWeight={'medium'}
      >
        Login dulu yuk biar bisa menikmati semua fitur seikhlasnya
      </Text>
      <Button
        onClick={() => router.push('/auth/login')}
        mt={10}
        colorPalette="brand.blue"
      >
        Login Sekarang
      </Button>
    </VStack>
  );
};

export default UnauthenticatedPage;
