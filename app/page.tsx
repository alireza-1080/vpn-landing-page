import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations/page";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Locations />
    </>
  );
};

export default HomePage;
