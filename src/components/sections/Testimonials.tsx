import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-[#D1D1D1]"
  >
    <path d="M12 5v14m-7-7h14" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 relative">
          {/* Left Title */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fe5537]" />
              <span className="text-[13px] font-medium tracking-wide text-[#0A0A0A] uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-[#0A0A0A]">
              Words That
              <br />
              Drive Us Forward.
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-start lg:max-w-[400px] gap-6">
            <p className="text-[15px] leading-[1.6] text-[#0A0A0A] font-medium">
              We measure our success by the results our clients achieve. Here's
              what they have to say.
            </p>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-[#fe5537] text-white rounded-full pl-6 pr-2 py-2 text-[14px] font-semibold hover:bg-[#e24a30] transition-colors"
            >
              View All Work
              <span className="bg-white text-[#fe5537] p-1.5 rounded-full transition-transform group-hover:scale-110">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between border border-black/[0.06]">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                    Samanth
                  </span>
                </div>
                <PlusIcon />
              </div>
              <p className="text-[16px] font-medium text-[#0A0A0A] leading-[1.5] tracking-[-0.01em]">
                Devify Labs built our new website from the ground up. The
                process was smooth, communication was excellent, and the final
                product exceeded what we'd imagined. Our enquiries have gone up
                noticeably since launch.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between border border-black/[0.06]">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                    Sooraj
                  </span>
                </div>
                <PlusIcon />
              </div>
              <p className="text-[16px] font-medium text-[#0A0A0A] leading-[1.5] tracking-[-0.01em]">
                As a startup, we needed a team that could move fast without
                cutting corners. Devify delivered our web app on time, within
                budget, and with zero hand-holding required. They just get it.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-[20px] p-8 flex flex-col justify-between border border-black/[0.06]">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                    Ananya
                  </span>
                </div>
                <PlusIcon />
              </div>
              <p className="text-[16px] font-medium text-[#0A0A0A] leading-[1.5] tracking-[-0.01em]">
                Our new brand identity is exactly what we envisioned - clean,
                modern, and distinctive. We're now consistently ranked #1 in our
                category, and the new site plays a huge role in that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
