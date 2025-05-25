'use client';

import SimpleField from '@/components/common/SimpleField';
import { Box, Button, Input, InputGroup, Text, VStack } from '@chakra-ui/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toaster } from '@/components/common/SimpleToaster';
import { authServices } from '@/services/admin/auth';
import { useMutation } from '@tanstack/react-query';
import { useInitialize } from '@/hooks/admin/use-initialize';
import { useRouter } from 'next/navigation';

const LOGIN_SCHEMA = z.object({
  email: z.string().min(1, { message: 'Harap isi email' }),
  password: z.string().min(1, { message: 'Harap isi password' }),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { refetchGetMe } = useInitialize();
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
      router.push('/admin/dashboard');
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
    <form onSubmit={onSubmit}>
      <Box bg="brand.white" shadow={'base'} borderRadius={12} px={8} py={12}>
        <VStack gap={4} alignItems={'center'} w="sm">
          <Image
            width={50}
            height={50}
            src="/assets/images/logo.png"
            alt="logo"
          />
          <Text fontWeight={'semibold'}>Seikhlasnya Admin</Text>

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

          <Button
            loading={isLoadingLogin}
            type="submit"
            w="full"
            colorPalette={'brand.blue'}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </form>
  );
};

export default LoginForm;
