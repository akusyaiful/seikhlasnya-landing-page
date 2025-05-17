'use client';

import { VStack, Text, Mark, Separator } from '@chakra-ui/react';
import GreetingSection from './components/GreetingSection';
import DonationForm from './components/DonationForm';
import BottomNavigation from '@/components/client/BottomNavigation';

const Home = () => {
  return (
    <VStack position={'relative'} minH={'vh'}>
      <GreetingSection />
      <DonationForm />
      <BottomNavigation />
    </VStack>
  );
};

export default Home;
