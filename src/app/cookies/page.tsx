import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="max-w-[900px] mx-auto px-6 py-24">
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A0A0A] mb-6">
            Cookie Policy
          </h1>
          <p className="text-[14px] font-medium text-[#6B6B6B] mb-10">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#4A4A4A]">
            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help websites function, remember
                preferences, and improve user experience.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                2. How We Use Cookies
              </h2>
              <p>
                Devify Labs may use cookies and similar technologies to enable
                core site functionality, analyze traffic, understand user
                behavior, and improve site performance.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                3. Types of Cookies We May Use
              </h2>
              <p>
                We may use essential cookies (required for core operation),
                analytics cookies (to understand usage), and functional cookies
                (to remember preferences). Third-party tools may also set
                cookies when embedded features are used.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                4. Managing Cookies
              </h2>
              <p>
                You can control or disable cookies through your browser
                settings. Disabling certain cookies may affect website
                functionality and user experience.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                5. Third-Party Services
              </h2>
              <p>
                Some third-party services linked from this website may use their
                own cookies. Their use of data is governed by their respective
                privacy and cookie policies.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                6. Updates to This Policy
              </h2>
              <p>
                We may update this Cookie Policy periodically to reflect legal,
                technical, or operational changes. Updated versions will be
                posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                7. Contact
              </h2>
              <p>
                If you have questions about our use of cookies, contact
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
