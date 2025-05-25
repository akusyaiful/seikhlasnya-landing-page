'use client';

import SimpleField from '@/components/common/SimpleField';
import {
  Box,
  Button,
  Input,
  InputGroup,
  Mark,
  Text,
  VStack,
} from '@chakra-ui/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toaster } from '@/components/common/SimpleToaster';
import { authServices } from '@/services/client/auth';
import { useMutation } from '@tanstack/react-query';
import { useInitialize } from '@/hooks/client/use-initialize';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const REGISTER_SCHEMA = z
  .object({
    fullName: z.string().min(1, { message: 'Harap isi nama lengkap' }),
    email: z.string().min(1, { message: 'Harap isi email' }),
    password: z
      .string()
      .min(6, { message: 'Password minimal berisi 6 karakter' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Password minimal berisi 6 karakter' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password tidak sama',
  });

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { refetchGetMe, isLoadingGetMe } = useInitialize();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
    resolver: zodResolver(REGISTER_SCHEMA),
  });
  const { mutateAsync: registerAccount, isPending: isLoadingRegister } =
    useMutation({
      mutationFn: (payload) => authServices.register(payload),
      onSuccess: async () => {
        await refetchGetMe();
        router.push('/auth/verify-account');
      },
    });

  const onSubmit = handleSubmit(async (values) => {
    try {
      delete values.confirmPassword;
      await registerAccount(values);
    } catch (error) {
      toaster.error({
        description: error.message,
      });
    }
  });

  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <VStack gap={4} alignItems={'center'} w="full">
        <Image
          width={70}
          height={70}
          src="/assets/images/logo.png"
          alt="logo"
        />
        <Text fontSize={18} color="brand.blue" fontWeight={'semibold'}>
          Daftar
        </Text>
        <Text
          fontSize={14}
          maxW={300}
          color="brand.grayDark"
          fontWeight={'normal'}
          textAlign={'center'}
          mb={8}
        >
          Selangkah lagi untuk memulai perjalanan kebaikanmu hari ini.
        </Text>

        <SimpleField label={'Nama'} errorText={errors?.email?.message}>
          <Input {...register('fullName')} placeholder="Nama Lengkap" />
        </SimpleField>

        <SimpleField label={'Email'} errorText={errors?.email?.message}>
          <Input {...register('email')} placeholder="Email" />
        </SimpleField>

        <SimpleField label={'Password'} errorText={errors?.password?.message}>
          <InputGroup
            endElement={
              <Box
                cursor={'pointer'}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon width={20} />
                ) : (
                  <EyeOffIcon width={20} />
                )}
              </Box>
            }
          >
            <Input
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
          </InputGroup>
        </SimpleField>

        <SimpleField
          label={'Konfirmasi Password'}
          errorText={errors?.confirmPassword?.message}
        >
          <InputGroup
            endElement={
              <Box
                cursor={'pointer'}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeIcon width={20} />
                ) : (
                  <EyeOffIcon width={20} />
                )}
              </Box>
            }
          >
            <Input
              {...register('confirmPassword')}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Konfirmasi Password"
            />
          </InputGroup>
        </SimpleField>

        <Button
          mt={10}
          loading={isLoadingRegister || isLoadingGetMe}
          type="submit"
          w="full"
          colorPalette={'brand.blue'}
        >
          Daftar
        </Button>
        <Text fontSize={14}>
          Sudah punya akun?{' '}
          <Link href={'/auth/login'}>
            <Mark fontWeight={'medium'} color="brand.blue">
              Masuk
            </Mark>
          </Link>
        </Text>
      </VStack>
    </form>
  );
};

export default RegisterForm;
