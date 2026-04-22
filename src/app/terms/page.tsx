import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="max-w-[900px] mx-auto px-6 py-24">
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A0A0A] mb-6">
            Terms & Conditions
          </h1>
          <p className="text-[14px] font-medium text-[#6B6B6B] mb-10">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#4A4A4A]">
            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using this website, you agree to these Terms &
                Conditions. If you do not agree, please do not use this site.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                2. Services and Information
              </h2>
              <p>
                Content on this site is provided for general information about
                Devify Labs and our services. Project scopes, pricing,
                timelines, and deliverables are finalized through separate
                written agreements.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                3. Intellectual Property
              </h2>
              <p>
                Unless stated otherwise, website content, branding, design, and
                related materials are owned by Devify Labs or used with
                permission. You may not copy, reproduce, distribute, or reuse
                content without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                4. Acceptable Use
              </h2>
              <p>
                You agree not to misuse this website, attempt unauthorized
                access, interfere with service operation, or submit unlawful or
                harmful content through forms or communication channels.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                5. Third-Party Links
              </h2>
              <p>
                This site may contain links to third-party websites or tools. We
                are not responsible for the content, policies, or practices of
                third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Devify Labs is not
                liable for indirect, incidental, or consequential damages
                arising from your use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                7. Changes to Terms
              </h2>
              <p>
                We may update these Terms & Conditions at any time. Continued
                use of the site after updates constitutes acceptance of the
                revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                8. Contact
              </h2>
              <p>
                For questions regarding these terms, contact
                info@devifylabs.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
