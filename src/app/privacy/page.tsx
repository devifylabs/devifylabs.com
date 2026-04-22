import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        <section className="max-w-[900px] mx-auto px-6 py-24">
          <h1 className="text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A0A0A] mb-6">
            Privacy Policy
          </h1>
          <p className="text-[14px] font-medium text-[#6B6B6B] mb-10">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-10 text-[16px] leading-[1.8] text-[#4A4A4A]">
            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                1. Introduction
              </h2>
              <p>
                Devify Labs respects your privacy and is committed to protecting
                your personal information. This Privacy Policy explains what we
                collect, why we collect it, and how we use and protect it when
                you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                2. Information We Collect
              </h2>
              <p>
                We may collect your name, email address, phone number,
                company-related information, and any details you submit through
                forms, bookings, or emails. We also collect basic technical data
                such as browser type, pages visited, and referral source for
                analytics and performance purposes.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                3. How We Use Information
              </h2>
              <p>
                We use your information to respond to inquiries, deliver
                services, improve website performance, communicate project
                updates, and maintain security. We do not sell your personal
                information.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                4. Data Sharing
              </h2>
              <p>
                We only share information with trusted tools and service
                providers required to run our website, scheduling, and
                communication workflows. These providers process data under
                their own privacy obligations.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                5. Data Retention and Security
              </h2>
              <p>
                We retain personal data only as long as needed for business,
                legal, or operational purposes. Reasonable administrative,
                technical, and organizational safeguards are used to protect
                your data.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                6. Your Rights
              </h2>
              <p>
                Depending on your location, you may have rights to access,
                update, correct, or delete your personal information. You may
                also request to limit or object to certain processing.
              </p>
            </div>

            <div>
              <h2 className="text-[24px] font-semibold text-[#0A0A0A] mb-3">
                7. Contact
              </h2>
              <p>
                For privacy requests or questions, contact us at
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
