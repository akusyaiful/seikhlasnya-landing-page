'use client';

import { SimpleDialog } from '@/components/common/SimpleDialog';
import SimpleField from '@/components/common/SimpleField';
import { SimpleSelect } from '@/components/common/SimpleSelect';
import { donationServices } from '@/services/client/donations';
import {
  ORGANIZATION_QUERY_KEYS,
  organizationServices,
} from '@/services/client/organizations';
import { useAuthStore } from '@/store/client/auth';
import {
  formatCurrency,
  formatNumber,
  unformatNumber,
} from '@/utils/formatter';
import {
  Box,
  Button,
  createListCollection,
  Grid,
  Input,
  InputGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ScanFaceIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import DonationSummary from '../DonationSummary';
import { useAppStore } from '@/store/client/app';

const DONATION_AMOUNT_OPTIONS = [
  {
    label: formatCurrency(5000),
    value: 5000,
  },
  {
    label: formatCurrency(10000),
    value: 10000,
  },
  {
    label: formatCurrency(15000),
    value: 15000,
  },
  {
    label: formatCurrency(25000),
    value: 25000,
  },
  {
    label: formatCurrency(50000),
    value: 50000,
  },
  {
    label: formatCurrency(100000),
    value: 100000,
  },
];

const CREATE_DONATION_SCHEMA = z.object({
  organizationId: z.string().min(1, { message: 'Harap pilih lembaga donasi' }),
  amount: z.number().min(1, { message: 'Harap isi nominal' }),
});

const DonationForm = () => {
  const user = useAuthStore((state) => state.user);
  const updateOpenModalUnauthenticated = useAppStore(
    (state) => state.updateOpenModalUnauthenticated
  );
  const router = useRouter();
  const [isLoadingCreateDonation, setIsLoadingCreateDonation] = useState(false);
  const [openModalSummary, setOpenModalSummary] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: false,
    resolver: zodResolver(CREATE_DONATION_SCHEMA),
  });

  const { mutateAsync: createDonation } = useMutation({
    mutationFn: (payload) => donationServices.createDonation(payload),
    onSuccess: async (res) => {
      router.push(`/donations/${res?.data?.donation?.id}/payment`);
    },
  });

  const { data: organizationsResponse, isFetching: isFetchingOrganizations } =
    useQuery({
      queryKey: [
        ORGANIZATION_QUERY_KEYS.GET_ORGANIZATIONS,
        { params: { page: 1, limit: 10 } },
      ],
      queryFn: organizationServices.getOrganizations,
      select: (response) => response.data,
    });

  const organizationOptions = useMemo(() => {
    return createListCollection({
      items:
        organizationsResponse?.organizations?.map((organization) => ({
          label: organization.name,
          value: organization.id,
          image: organization.logoPic,
        })) || [],
    });
  }, [organizationsResponse]);

  const amountValue = watch('amount');
  const selectedOrganization = useMemo(() => {
    const selectedId = getValues('organizationId');
    const selectedObj = organizationsResponse?.organizations?.find(
      (item) => item.id === selectedId
    );

    return selectedObj;
  }, [openModalSummary]);

  const handleCreateDonation = async () => {
    try {
      setIsLoadingCreateDonation(true);
      const values = getValues();

      await createDonation(values);
    } catch (error) {
      setIsLoadingCreateDonation(false);
      console.log(error);
      toaster.error({
        description: error.message,
      });
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    if (!user) {
      updateOpenModalUnauthenticated(true);
      return;
    }
    setOpenModalSummary(true);
  });

  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Box w="full" px={{ base: 6, md: 8 }} mb={36} id="donation-form">
        <VStack
          mt={-100}
          p={{ base: 4, md: 8 }}
          gap={4}
          bg="brand.white"
          alignItems={'center'}
          w="full"
          shadow={'base'}
          borderRadius={16}
        >
          <Text fontWeight={'semibold'} fontSize={18}>
            Form Donasi
          </Text>
          <SimpleField errorText={errors?.organizationId?.message}>
            <SimpleSelect
              collection={organizationOptions}
              placeholder="Pilih Lembaga Donasi"
              {...register('organizationId')}
            />
          </SimpleField>

          <Grid w="full" templateColumns="repeat(3, 1fr)" gap={4}>
            {DONATION_AMOUNT_OPTIONS.map((amount) => (
              <Box
                key={amount.value}
                cursor={'pointer'}
                w="full"
                borderRadius={12}
                border={'0.5px solid'}
                borderColor={'brand.gray'}
                px={{ base: 2, md: 4 }}
                py={2}
                textAlign={'center'}
                onClick={() => setValue('amount', Number(amount.value))}
              >
                <Text
                  color="brand.grayDark"
                  fontWeight={'semibold'}
                  fontSize={{ base: 11, md: 14 }}
                >
                  {amount.label}
                </Text>
              </Box>
            ))}
          </Grid>
          <InputGroup startElement="Rp">
            <Input
              placeholder="Nominal donasi"
              value={formatNumber(amountValue || 0)}
              onChange={(event) => {
                const value = unformatNumber(event.target.value);
                setValue('amount', Number(value));
              }}
            />
          </InputGroup>
          <Button
            type="submit"
            w="full"
            size={{ base: 'md', md: 'lg' }}
            fontWeight={'semibold'}
            colorPalette={'brand.blue'}
            loading={isFetchingOrganizations}
          >
            Donasi Sekarang
          </Button>
        </VStack>
      </Box>
      <DonationSummary
        open={openModalSummary}
        onOpenChange={(event) => setOpenModalSummary(event.open)}
        amount={amountValue}
        selectedOrganization={selectedOrganization}
        handleCreateDonation={handleCreateDonation}
        isLoadingCreateDonation={isLoadingCreateDonation}
      />
    </form>
  );
};

export default DonationForm;
