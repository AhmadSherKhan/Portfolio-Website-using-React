import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";

import Img from "../assets/pngwing.com (1).png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero image={Img} />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
