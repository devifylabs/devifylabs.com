import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Services />
      </main>
      <Footer />
    </>
  );
}
