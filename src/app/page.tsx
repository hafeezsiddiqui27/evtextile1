
import Navbar from "./components/Navbar";
import Hero from "./components/Home/hero";
import KeyHighlights from "./components/Home/highlights";
import Products from "./components/Home/fearprod";

import SustainabilityMission from "./components/Home/sustain";
import TestimonialsOrPartners from "./components/Home/partner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <KeyHighlights />
      <Products />
      <SustainabilityMission />
      <TestimonialsOrPartners />
      <Footer />
    </div>
  );
}
