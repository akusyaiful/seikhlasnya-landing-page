import { authServices, AUTH_QUERY_KEYS } from '@/services/client/auth';
import { useAuthStore } from '@/store/client/auth';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useInitialize = () => {
  const pathname = usePathname();
  const isAuth = pathname.includes('/auth/');
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
    retry: false,
  });

  useEffect(() => {
    if (!isLoadingGetMe) {
      if (meResponse) {
        updateUser(meResponse?.data?.user);
        setIsLoadingInit(false);
      } else {
        updateUser(null);
        setIsLoadingInit(false);
      }
    }
  }, [meResponse, isLoadingGetMe, updateUser]);

  return {
    isLoadingInit,
    refetchGetMe,
    isLoadingGetMe,
  };
};
