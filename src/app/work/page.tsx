import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Works from "@/components/sections/Works";
import Testimonials from "@/components/sections/Testimonials";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Works />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
