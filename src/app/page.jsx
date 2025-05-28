import AboutSection from "@/components/landing-page/AboutSection";
import ActivitySection from "@/components/landing-page/ActivitySection";
import ContactSection from "@/components/landing-page/ContactSection";
import GreetingSection from "@/components/landing-page/GreetingSection";
import Navbar from "@/components/landing-page/Navbar";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack position={"relative"} minH={"vh"}>
      <Navbar />
      <GreetingSection />
      <AboutSection />
      <ActivitySection />
      <ContactSection />
    </VStack>
  );
};

export default Home;
