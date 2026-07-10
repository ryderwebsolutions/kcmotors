import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import ActionCards from "@/components/ActionCards";
import About from "@/components/About";
import TyresFirstStop from "@/components/TyresFirstStop";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import LocationHours from "@/components/LocationHours";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ActionCards />
      <About />
      <TyresFirstStop />
      <Gallery />
      <Reviews />
      <LocationHours />
      <Contact />
      <FAQ />
    </>
  );
}
