import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "React Native",
  "Tailwind CSS",
  "Framer Motion",
  "Figma",
  "Vercel",
  "AWS",
  "Docker",
  "Stripe",
  "REST API",
];

const marqueeItems = [...technologies, ...technologies];

export default function Hero() {
  return (
    <section
      className="relative h-screen hero-gradient overflow-hidden flex flex-col"
      aria-label="Hero section"
    >
      {/* ── Ambient warm blobs ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-18%",
          left: "-10%",
          width: "62%",
          height: "85%",
          background:
            "radial-gradient(ellipse at center, rgba(254,85,55,0.2) 0%, transparent 68%)",
          filter: "blur(52px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: "10%",
          right: "-6%",
          width: "42%",
          height: "58%",
          background:
            "radial-gradient(ellipse at center, rgba(255,158,130,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Extra subtle bloom — top-right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "0%",
          right: "5%",
          width: "30%",
          height: "45%",
          background:
            "radial-gradient(ellipse at center, rgba(255,194,173,0.18) 0%, transparent 60%)",
          filter: "blur(36px)",
        }}
      />

      {/* ── Hero text + CTAs ── */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Eye-brow badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-orange-100 rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fe5537] flex-shrink-0" />
          <span className="text-[11.5px] font-semibold text-[#1D4ED8] uppercase tracking-[0.14em]">
            Full-Service Digital Studio
          </span>
        </div> */}

        {/* Main heading */}
        <h1
          className="max-w-[1100px] text-3xl md:text-4xl lg:text-7xl font-medium leading-[1.06] tracking-[-0.03em] text-black mb-6 inline-block origin-center"
          style={{ transform: "scale(1.2)" }}
        >
          <span className="text-[#fe5537]">Creating</span> Digital Ecosystem
        </h1>

        {/* Subtitle */}
        <p className="max-w-[680px] text-[16.5px] text-[#374151] tracking-tight mb-10 font-normal leading-[1.65]">
          Devify Labs is a full-service digital studio building websites, web
          apps, and mobile applications for startups, SaaS companies, and brands
          ready to scale globally.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Primary — rich blue gradient button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white rounded-full bg-[#fe5537] hover:bg-[#e24a30]"
              // style={{
              //   background: "linear-gradient(135deg, #1D4ED8 0%, #4F46E5 100%)",
              //   boxShadow: "0 4px 20px rgba(29,78,216,0.35), 0 1px 3px rgba(29,78,216,0.2)",
              // }}
            >
              Start a Project
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
            {/* Secondary — frosted glass */}
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium text-black rounded-full border border-black/10 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* ── Technologies marquee band ── */}
      <div className="relative z-10 shrink-0 border-t border-black/10 border-dashed bg-white/40 backdrop-blur-sm">
        {/* Added wrapper with max-width and px-6 to match previous sections */}
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          {/* Added border-x here to frame it nicely within the max-width */}
          <div className="flex items-stretch border-x border-black/10 border-dashed h-14 md:h-22">
            {/* Left label */}
            <div
              className="shrink-0 flex flex-col justify-center border-r border-black/10 border-dashed bg-white/60 px-4 md:px-8"
              style={{ minWidth: "fit-content" }}
              aria-label="Technologies"
            >
              <p className="text-[10px] font-semibold text-[#fe5537] uppercase tracking-[0.18em] mb-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe5537] shrink-0" />
                TECHNOLOGIES
              </p>
            </div>

            {/* Marquee */}
            <div
              className="flex-1 overflow-hidden h-14 md:h-22"
              aria-hidden="true"
            >
              <div className="marquee-left h-full flex">
                {marqueeItems.map((tech, i) => (
                  <div
                    key={i}
                    className="shrink-0 flex items-center border-r border-black/10 border-dashed px-4 md:px-8 h-full"
                  >
                    <span className="text-[12px] md:text-[15px] font-medium text-black/70 whitespace-nowrap hover:text-[#0A0A0A] transition-colors duration-200 cursor-default">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
