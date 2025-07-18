import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations/page";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import TrustedBy from "@/components/TrustedBy";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Locations />
      <TrustedBy />
      <Subscribe />
    </>
  );
};

export default HomePage;
