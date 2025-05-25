'use client';

import { Button, Center } from '@chakra-ui/react';
import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  const router = useRouter();

  return (
    <Center
      position={'relative'}
      h="vh"
      bg="brand.white"
      w="full"
      borderRadius={12}
      px={{ base: 6, md: 8 }}
      py={12}
    >
      <Button
        onClick={() => router.back()}
        position={'absolute'}
        left={0}
        top={5}
        variant={'plain'}
        py={2}
      >
        <ChevronLeftIcon size={40} height={40} strokeWidth={2.75} />
      </Button>
      <RegisterForm />
    </Center>
  );
};

export default Register;
