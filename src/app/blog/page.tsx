import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Blog from "@/components/sections/Blog";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Blog />
      </main>
      <Footer />
    </>
  );
}
