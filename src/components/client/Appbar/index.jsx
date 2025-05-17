import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { CLIENT_CONTAINER_MAX_WIDTH } from '../Container';
import { ChevronLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Appbar = ({ title }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname.includes('payment')) {
      router.push('/donations');
    }
    router.back();
  };

  return (
    <Box
      w="full"
      boxShadow={'base'}
      position={'fixed'}
      bg={'brand.white'}
      top={0}
      zIndex={'sticky'}
      maxW={CLIENT_CONTAINER_MAX_WIDTH}
    >
      <Grid
        alignItems={'center'}
        templateColumns={'repeat(3, 1fr)'}
        py={{ base: 2, md: 6 }}
      >
        <GridItem colSpan={1}>
          <Button onClick={handleBack} variant={'plain'} py={2}>
            <ChevronLeftIcon size={40} height={40} strokeWidth={2.75} />
          </Button>
        </GridItem>
        <GridItem colSpan={1}>
          <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'lg'}>
            {title}
          </Text>
        </GridItem>
        <GridItem colSpan={1}></GridItem>
      </Grid>
    </Box>
  );
};

export default Appbar;
