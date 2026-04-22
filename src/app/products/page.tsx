import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Collaborations from "@/components/sections/Collaborations";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Collaborations />
      </main>
      <Footer />
    </>
  );
}
