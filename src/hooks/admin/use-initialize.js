import { authServices, AUTH_QUERY_KEYS } from '@/services/admin/auth';
import { useAuthStore } from '@/store/admin/auth';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useInitialize = () => {
  const pathname = usePathname();
  const isAuth = pathname.includes('/admin/auth/');
  const updateUser = useAuthStore((state) => state.updateUser);
  const [isLoadingInit, setIsLoadingInit] = useState(true);

  const {
    data: meResponse,
    isLoading: isLoadingGetMe,
    refetch: refetchGetMe,
  } = useQuery({
    queryKey: [AUTH_QUERY_KEYS.getMe],
    queryFn: authServices.getMe,
    enabled: !isAuth,
  });

  useEffect(() => {
    if (!isLoadingGetMe) {
      if (meResponse) {
        updateUser(meResponse?.data?.user);
        setIsLoadingInit(false);
      } else {
        setIsLoadingInit(false);
      }
    }
  }, [meResponse, isLoadingGetMe, updateUser]);

  return {
    isLoadingInit,
    refetchGetMe,
  };
};
