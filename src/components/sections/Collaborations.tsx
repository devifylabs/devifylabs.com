import React from "react";
import { Cloud, Shield, Cpu, Terminal } from "lucide-react";

const clients = [
  {
    category: "SaaS Infrastructure",
    duration: "4 Years",
    service: "Cloud Architecture",
    logo: (
      <div className="flex items-center gap-2">
        <Cloud className="w-6 h-6 text-[#0A0A0A]" strokeWidth={2} />
        <span className="font-semibold text-[16px] text-[#0A0A0A] tracking-tight">
          CloudScale
        </span>
      </div>
    ),
    logoLabel: "CloudScale",
  },
  {
    category: "Fintech Platform",
    duration: "2 Years",
    service: "Security & API",
    logo: (
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-[#0A0A0A]" strokeWidth={2} />
        <span className="font-semibold text-[16px] text-[#0A0A0A] tracking-tight">
          Vault Finance
        </span>
      </div>
    ),
    logoLabel: "Vault Finance",
  },
  {
    category: "AI & Machine Learning",
    duration: "1 Year",
    service: "Data Engineering",
    logo: (
      <div className="flex items-center gap-2">
        <Cpu className="w-6 h-6 text-[#0A0A0A]" strokeWidth={2} />
        <span className="font-semibold text-[16px] text-[#0A0A0A] tracking-tight">
          NeuroSync ML
        </span>
      </div>
    ),
    logoLabel: "NeuroSync ML",
  },
  {
    category: "Open Source DevTools",
    duration: "3 Years",
    service: "Core Optimization",
    logo: (
      <div className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-[#0A0A0A]" strokeWidth={2} />
        <span className="font-semibold text-[16px] text-[#0A0A0A] tracking-tight">
          Terminal X
        </span>
      </div>
    ),
    logoLabel: "Terminal X",
  },
];

export default function Collaborations() {
  return (
    <section
      id="collaborations"
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="collab-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Centered Header Section */}
        <div className="flex flex-col items-center mb-8">
          <p className="flex items-center text-[15px] font-medium text-black mb-2">
            <span className="text-[#fe5537] text-xl leading-none mr-2">•</span>
            Collaborations
          </p>
          <h2
            id="collab-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] text-center"
          >
            Trusted Across Industries.
          </h2>
          <p className="text-[15px] text-[#6B6B6B] mt-3 text-center max-w-[680px]">
            Long-term partnerships built on results, reliability, and shared
            growth.
          </p>
        </div>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div
              key={client.logoLabel}
              className="bg-[#F3F3F3] rounded-[16px] p-6 flex flex-col"
            >
              {/* Top info */}
              <div className="mb-4">
                <p className="text-[16px] font-medium text-[#0A0A0A] leading-tight mb-1">
                  {client.category}
                </p>
                <p className="text-[14px] text-[#555555]">{client.duration}</p>
              </div>

              {/* Service tag (White Pill) */}
              <div>
                <span className="bg-white px-4 py-1.5 rounded-full text-[13px] text-[#0A0A0A]">
                  {client.service}
                </span>
              </div>

              {/* Spacer to push logo to bottom */}
              <div className="flex-1 min-h-[60px]" />

              {/* Logo container (White Pill) */}
              <div
                className="bg-white rounded-[30px] w-full h-[72px] flex items-center justify-center px-6 mt-auto"
                aria-label={client.logoLabel}
              >
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
