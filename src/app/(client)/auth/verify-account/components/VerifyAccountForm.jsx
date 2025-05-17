'use client';

import {
  Button,
  Mark,
  PinInput,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { toaster } from '@/components/common/SimpleToaster';
import { authServices } from '@/services/client/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Countdown from 'react-countdown';
import { VERIFICATION_TOKEN_EXPIRES_MS } from '@/constants/auth';
import { useInitialize } from '@/hooks/client/use-initialize';

const VerifyAccountForm = () => {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const isCodeFilled = code.join('').length === 6;
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);

  const { refetchGetMe } = useInitialize();

  const { mutateAsync: verifyAccount, isPending: isLoadingVerifyAccount } =
    useMutation({
      mutationFn: (payload) => authServices.verifyAccount(payload),
      onSuccess: async () => {
        await refetchGetMe();
        router.push('/');
      },
    });

  const {
    mutateAsync: resendVerification,
    isPending: isLoadingResendVerification,
  } = useMutation({
    mutationFn: authServices.resendVerification,
    onSuccess: async () => {
      toaster.success({
        description: 'Kode verifikasi berhasil dikirm',
      });
      setIsTimerCompleted(false);
    },
  });

  const handleVerifyAccount = async () => {
    try {
      await verifyAccount({
        verificationToken: code.join(''),
      });
    } catch (error) {
      toaster.error({
        description: error.message,
      });
    }
  };

  const handleResendVerification = async () => {
    if (isLoadingResendVerification) {
      return;
    }
    try {
      await resendVerification();
    } catch (error) {
      toaster.error({
        description: error.message,
      });
    }
  };

  return (
    <VStack gap={4} alignItems={'center'} w="full">
      <Image width={70} height={70} src="/assets/images/logo.png" alt="logo" />
      <Text fontSize={18} color="brand.blue" fontWeight={'semibold'}>
        Verfikasi Akun
      </Text>
      <Text
        fontSize={16}
        maxW={300}
        color="brand.grayDark"
        fontWeight={'normal'}
        textAlign={'center'}
        mb={8}
      >
        Silakan masukkan kode OTP yang telah kami kirimkan ke email Anda.
      </Text>

      <PinInput.Root
        size="lg"
        value={code}
        onValueChange={(e) => setCode(e.value)}
      >
        <PinInput.HiddenInput />
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
          <PinInput.Input index={4} />
          <PinInput.Input index={5} />
        </PinInput.Control>
      </PinInput.Root>

      <Button
        mt={10}
        loading={isLoadingVerifyAccount}
        disabled={!isCodeFilled}
        onClick={handleVerifyAccount}
        type="submit"
        w="full"
        colorPalette={'brand.blue'}
      >
        Verifikasi
      </Button>
      <Text gap={2} display={'flex'} fontSize={14}>
        Belum menerima OTP?{' '}
        <Countdown
          zeroPadTime={2}
          key={isTimerCompleted.toString()}
          date={Date.now() + VERIFICATION_TOKEN_EXPIRES_MS}
          onComplete={() => setIsTimerCompleted(true)}
          renderer={({ formatted }) => {
            if (isTimerCompleted) {
              return (
                <Mark
                  onClick={handleResendVerification}
                  cursor={isLoadingResendVerification ? 'disabled' : 'pointer'}
                  fontWeight={'medium'}
                  color="brand.blue"
                  display={'flex'}
                  gap={1}
                  alignItems={'center'}
                >
                  Kirim ulang{' '}
                  {isLoadingResendVerification && (
                    <Spinner colorPalette={'brand.blue'} size="sm" />
                  )}
                </Mark>
              );
            } else {
              return (
                <Mark
                  cursor={'disabled'}
                  fontWeight={'medium'}
                  color="brand.blue"
                >
                  Kirim ulang dalam {formatted?.minutes}:{formatted?.seconds}
                </Mark>
              );
            }
          }}
        />
      </Text>
    </VStack>
  );
};

export default VerifyAccountForm;
