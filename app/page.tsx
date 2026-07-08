import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import QuickActions from "@/components/QuickActions";
import Services from "@/components/Services";
import TyresFirstStop from "@/components/TyresFirstStop";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import LocationHours from "@/components/LocationHours";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <QuickActions />
      <Services />
      <TyresFirstStop />
      <About />
      <WhyChooseUs />
      <Process />
      <Reviews />
      <LocationHours />
      <Contact />
      <FAQ />
    </>
  );
}
