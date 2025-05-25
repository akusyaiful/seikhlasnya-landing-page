import GreetingSection from "@/components/landing-page/GreetingSection";
import Navbar from "@/components/landing-page/Navbar";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack position={"relative"} minH={"vh"}>
      <Navbar />
      <GreetingSection />
    </VStack>
  );
};

export default Home;
