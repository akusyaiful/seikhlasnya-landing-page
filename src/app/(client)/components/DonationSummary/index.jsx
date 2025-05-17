import { useAuthStore } from '@/store/client/auth';
import { formatCurrency } from '@/utils/formatter';
import {
  Button,
  CloseButton,
  DataList,
  Dialog,
  Portal,
  Separator,
  VStack,
} from '@chakra-ui/react';

const DonationSummary = ({
  amount,
  selectedOrganization,
  open,
  onOpenChange,
  handleCreateDonation,
  isLoadingCreateDonation,
}) => {
  const user = useAuthStore((state) => state.user);

  const stats = [
    { label: 'Nama', value: user?.fullName },
    { label: 'Email', value: user?.email },
    { label: 'Lembaga Donasi', value: selectedOrganization?.name },
    { label: 'Jumlah Donasi', value: formatCurrency(amount) },
  ];

  return (
    <Dialog.Root
      trapFocus={false}
      open={open}
      placement={'center'}
      onOpenChange={(event) => onOpenChange(event)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius={16}
            maxWidth={{ base: '90vw', md: '550px' }}
          >
            <Dialog.Header display={'flex'} justifyContent={'center'}>
              <Dialog.Title>Ringkasan Donasi</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={16} w="full">
                <DataList.Root
                  orientation="horizontal"
                  gap={2}
                  divideY="1px"
                  maxW="md"
                  w="full"
                >
                  {stats.map((item) => (
                    <DataList.Item key={item.label} pt={2}>
                      <DataList.ItemLabel fontWeight={'semibold'}>
                        {item.label}
                      </DataList.ItemLabel>
                      <DataList.ItemValue
                        display={'flex'}
                        justifyContent={'flex-end'}
                      >
                        {item.value}
                      </DataList.ItemValue>
                    </DataList.Item>
                  ))}
                </DataList.Root>

                <DataList.Root
                  orientation="horizontal"
                  gap={2}
                  divideY="0px"
                  maxW="md"
                  w="full"
                >
                  <Separator w="full" variant="dashed" />

                  <DataList.Item pt={2}>
                    <DataList.ItemLabel fontWeight={'semibold'} fontSize={16}>
                      Total Pembayaran
                    </DataList.ItemLabel>
                    <DataList.ItemValue
                      fontWeight={'semibold'}
                      display={'flex'}
                      justifyContent={'flex-end'}
                      fontSize={16}
                    >
                      {formatCurrency(amount)}
                    </DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer display={'flex'} flexDirection={'column'}>
              <Button
                onClick={() => handleCreateDonation()}
                w="full"
                colorPalette={'brand.blue'}
                loading={isLoadingCreateDonation}
              >
                Donasi
              </Button>
              <Dialog.ActionTrigger asChild>
                <Button w="full" variant="outline">
                  Batal
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DonationSummary;
