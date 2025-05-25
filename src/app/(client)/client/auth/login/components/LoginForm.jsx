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
import SimpleCheckbox from '@/components/common/SimpleCheckbox';
import Link from 'next/link';

const LOGIN_SCHEMA = z.object({
  email: z.string().min(1, { message: 'Harap isi email' }),
  password: z.string().min(1, { message: 'Harap isi password' }),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { refetchGetMe, isLoadingGetMe } = useInitialize();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
    resolver: zodResolver(LOGIN_SCHEMA),
  });
  const { mutateAsync: login, isPending: isLoadingLogin } = useMutation({
    mutationFn: (payload) => authServices.login(payload),
    onSuccess: async () => {
      await refetchGetMe();
      router.push('/');
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await login(values);
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
          Selamat Datang
        </Text>
        <Text
          fontSize={14}
          maxW={300}
          color="brand.grayDark"
          fontWeight={'normal'}
          textAlign={'center'}
          mb={8}
        >
          Masukan email dan password anda
        </Text>

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

        <SimpleField>
          <SimpleCheckbox label="Remember me" />
        </SimpleField>

        <Button
          mt={10}
          loading={isLoadingLogin || isLoadingGetMe}
          type="submit"
          w="full"
          colorPalette={'brand.blue'}
        >
          Masuk
        </Button>
        <Text fontSize={14}>
          Belum punya akun?{' '}
          <Link href={'/auth/register'}>
            <Mark fontWeight={'medium'} color="brand.blue">
              Daftar sekarang
            </Mark>
          </Link>
        </Text>
      </VStack>
    </form>
  );
};

export default LoginForm;
