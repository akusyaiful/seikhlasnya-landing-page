'use client';

import SimpleAvatar from '@/components/common/SimpleAvatar';
import { toaster } from '@/components/common/SimpleToaster';
import { authServices } from '@/services/admin/auth';
import { useAuthStore } from '@/store/admin/auth';
import { Button, Flex } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Account = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const { mutateAsync: logout } = useMutation({
    mutationFn: () => authServices.logout(),
    onSuccess: async () => {
      localStorage.clear();
      router.push('/admin/auth/login');
    },
  });

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toaster.error({
        title: error.message,
      });
    }
  };

  return (
    <Flex>
      <SimpleAvatar size="sm" name={user?.fullName} showNameTooltip />

      <Button
        onClick={handleLogout}
        colorPalette={'brand.grayDark'}
        variant={'ghost'}
      >
        <LogOutIcon />
        Keluar
      </Button>
    </Flex>
  );
};

export default Account;
