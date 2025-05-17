'use client';

import SimpleBreadcrumb from '@/components/common/SimpleBreadcrumb';
import { Grid, GridItem, Box, HStack, VStack } from '@chakra-ui/react';
import NavigationMenu from './NavigationMenu';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/components/common/SplashScreen';
import { useInitialize } from '../../../hooks/admin/use-initialize';
import Logo from './Logo';
import Account from './Account';

const Container = ({ children }) => {
  const pathname = usePathname();
  const isAuth = pathname.includes('/admin/auth/');
  const { isLoadingInit } = useInitialize();

  if (isLoadingInit) {
    return (
      <Box bg="brand.grayLighter">
        <SplashScreen />
      </Box>
    );
  }

  if (isAuth) {
    return <Box bg="brand.grayLighter">{children}</Box>;
  }

  return (
    <Grid
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(10, 1fr)"
      h="vh"
    >
      <GridItem rowSpan={10} colSpan={2}>
        <VStack
          px={4}
          alignItems={'flex-start'}
          h="full"
          bg="brand.grayLighter"
        >
          <Logo />
          <NavigationMenu />
        </VStack>
      </GridItem>
      <GridItem rowSpan={1} colSpan={8}>
        <HStack
          justifyContent={'space-between'}
          px={4}
          h="full"
          bg="brand.grayLighter"
          alignItems={'center'}
        >
          <SimpleBreadcrumb />
          <Account />
        </HStack>
      </GridItem>
      <GridItem rowSpan={9} colSpan={8}>
        <Box h="full" overflowY={'auto'} bg="brand.grayLighter">
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Container;
