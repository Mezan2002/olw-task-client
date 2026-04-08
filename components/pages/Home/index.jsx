import Hero from "@/components/pages/Home/Hero";
import Services from "@/components/pages/Home/Services";
import Pricing from "@/components/pages/Home/Pricing";
import Integrations from "@/components/pages/Home/Integrations";
import GettingStarted from "@/components/pages/Home/GettingStarted";
import WhyChooseUs from "@/components/pages/Home/WhyChooseUs";
import Reviews from "@/components/pages/Home/Reviews";
import FAQ from "@/components/pages/Home/FAQ";
import CTA from "@/components/pages/Home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
      <Integrations />
      <GettingStarted />
      <WhyChooseUs />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
