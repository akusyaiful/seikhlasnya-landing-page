'use client';

import { Button } from '@chakra-ui/react';
import { SimpleDialog } from '@/components/common/SimpleDialog';
import { useAppStore } from '@/store/client/app';
import { useRouter } from 'next/navigation';
import { ScanFaceIcon } from 'lucide-react';

const UnauthenticatedModal = () => {
  const router = useRouter();
  const openModalUnauthenticated = useAppStore(
    (state) => state.openModalUnauthenticated
  );
  const updateOpenModalUnauthenticated = useAppStore(
    (state) => state.updateOpenModalUnauthenticated
  );

  return (
    <SimpleDialog
      description="Login dulu yuk buat nikmati semua fitur Seikhlasnya"
      footer={
        <Button
          mb={4}
          colorPalette="brand.blue"
          fontWeight="semibold"
          w="full"
          onClick={() => router.push('/auth/login')}
        >
          Login
        </Button>
      }
      icon={<ScanFaceIcon size={48} color="var(--se-colors-brand-blue)" />}
      open={openModalUnauthenticated}
      title="Kamu Belum Login"
      onOpenChange={(event) => updateOpenModalUnauthenticated(event.open)}
    />
  );
};

export default UnauthenticatedModal;
