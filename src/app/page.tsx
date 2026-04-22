import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Works from "@/components/sections/Works";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />

        <FAQ />
        <Works />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
