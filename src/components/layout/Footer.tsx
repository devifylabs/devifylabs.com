import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white font-sans mt-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Side */}
          <div className="w-full lg:w-[38%] flex flex-col justify-between py-4">
            <div>
              {/* Headline */}
              <h2 className="text-[36px] md:text-[44px] xl:text-[46px] font-medium leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-12 max-w-[440px]">
                Ready to Build Something That Lasts?
              </h2>

              <p className="text-[16px] text-[#4B5563] leading-[1.6] max-w-[520px] mb-8">
                Whether you're launching a new product or scaling an existing
                one - Devify Labs has the team, the process, and the track
                record to get you there.
              </p>

              {/* Call to Action */}
              <Link
                href="https://cal.com/devifylabs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-7 py-3.5 rounded-[100px] font-medium text-[15px] hover:bg-[#1A1A1A] transition-all duration-300 w-fit"
              >
                Book a Free Strategy Call
                <span className="bg-white/15 rounded-full p-1 group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side (Black Box) */}
          <div className="w-full lg:w-[62%] bg-[#0A0A0A] rounded-[36px] p-8 md:p-12 lg:p-12 flex flex-col justify-between min-h-[380px] shadow-2xl relative overflow-hidden">
            {/* Subtle background glow/noise could go here */}

            <div className="relative z-10 w-full flex gap-12 md:gap-24 xl:gap-32">
              {/* Column 1: Navigation */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[11px] uppercase tracking-tight text-white font-medium mb-3">
                  Company
                </h4>
                <Link
                  href="/about"
                  className="group flex items-center text-[#A8A8A8] text-[14px] font-medium hover:text-white transition-colors w-fit"
                >
                  About
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 text-[#fe5537]">
                    →
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group flex items-center text-[#A8A8A8] text-[14px] font-medium hover:text-white transition-colors w-fit"
                >
                  Services
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 text-[#fe5537]">
                    →
                  </span>
                </Link>
                <Link
                  href="/work"
                  className="group flex items-center text-[#A8A8A8] text-[14px] font-medium hover:text-white transition-colors w-fit"
                >
                  Work
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 text-[#fe5537]">
                    →
                  </span>
                </Link>
              </div>

              {/* Column 2: Connect */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-[11px] uppercase tracking-tight text-white font-medium mb-4">
                    Get in Touch
                  </h4>
                </div>

                {/* Social Links Below Get in Touch */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/devifylabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                      alt="Instagram"
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/devifylabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png"
                      alt="LinkedIn"
                      loading="lazy"
                      decoding="async"
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Column 3: Address (Top Right) */}
              <div className="hidden sm:flex flex-col gap-4 ml-auto text-left lg:text-right w-full lg:w-auto mt-8 lg:mt-0">
                <h4 className="text-[11px] uppercase tracking-tight text-white font-medium mb-3">
                  Office
                </h4>
                <div className="flex flex-col gap-1.5 text-[#A8A8A8] text-[14px] font-medium">
                  <span className="tracking-tight">
                    6-75/13a, Maiya House, Gurupura, Kaikamba, Mangalore,
                    Karnataka, India - 574151
                  </span>
                  <a
                    href="mailto:info@devifylabs.com"
                    className="tracking-tight hover:text-white transition-colors"
                  >
                    info@devifylabs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 relative z-10 w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-10">
              {/* Copyright and Social Links */}
              <span className="text-[#6B6B6B] text-[12px] xl:text-[13px] font-medium">
                © 2026 Devify Labs. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text Watermark */}
      <div className="w-full overflow-hidden mt-16 md:mt-20 flex items-end justify-center pointer-events-none select-none">
        <span
          className="font-black text-[#F2F2F2] tracking-[-0.05em] leading-[0.75] whitespace-nowrap text-center block w-full"
          style={{ fontSize: "18vw" }}
        >
          Devify Labs.
        </span>
      </div>

      {/* Legal Links Bottom Bar */}
      <div className="w-full flex justify-center items-center gap-3 py-6 pb-8 text-[#9A9A9A] text-[12px] font-medium tracking-wide">
        <Link
          href="/privacy"
          className="hover:text-[#0A0A0A] transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="text-[#E5E5E5] px-0.5">•</span>
        <Link href="/terms" className="hover:text-[#0A0A0A] transition-colors">
          Terms & Conditions
        </Link>
        <span className="text-[#E5E5E5] px-0.5">•</span>
        <Link
          href="/cookies"
          className="hover:text-[#0A0A0A] transition-colors"
        >
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
}
