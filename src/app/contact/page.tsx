import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
          <p className="text-[13px] font-semibold tracking-wide uppercase text-[#fe5537] mb-4">
            Contact
          </p>
          <h1 className="text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] max-w-[720px] mb-6">
            Let us build something that moves your business forward.
          </h1>
          <p className="text-[16px] text-[#5A5A5A] leading-[1.7] max-w-[700px] mb-10">
            Email us at info@devifylabs.com or book a technical audit through
            the footer button. We usually respond within 1 to 2 business days.
          </p>
          <a
            href="mailto:info@devifylabs.com"
            className="inline-flex items-center rounded-full bg-[#0A0A0A] text-white px-7 py-3.5 text-[15px] font-medium hover:bg-[#1A1A1A] transition-colors"
          >
            Send an Email
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
