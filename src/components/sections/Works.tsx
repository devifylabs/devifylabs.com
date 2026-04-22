import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    tags: ["Restaurant", "Web Design"],
    metric: "",
    title: "Grado Babo",
    description:
      "An elegant, responsive website for an Italian restaurant, featuring a dynamic menu, table reservations, and an immersive gallery. Built as a custom 3-5 page website with UX research, mobile-friendly design, Next.js, and SEO optimization.",
    href: "https://www.grado-babo.com/",
    bgColor: "#0A0A0A",
    imageUrl: "/Gradobabo.png",
    hasImage: true,
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="works-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            {/* Label with blue dot */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#fe5537]" />
              <p className="text-sm font-semibold tracking-wide text-gray-900">
                Works
              </p>
            </div>

            <h2
              id="works-heading"
              className="text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0A0A] max-w-[400px]"
            >
              Real Products,
              <br />
              Real Results.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 lg:mt-8">
            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#6B6B6B] max-w-[360px] lg:text-left font-medium">
              We don't just deliver files - we deliver outcomes. Here's a look
              at what we've built and what it achieved.
            </p>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white rounded-full pl-6 pr-2 py-2 text-sm font-semibold hover:bg-[#1A1A1A] transition-colors"
            >
              View All Work
              <span className="bg-white text-[#0A0A0A] p-1.5 rounded-full">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-[32px] overflow-hidden relative flex flex-col md:flex-row shadow-sm"
              style={{ backgroundColor: study.bgColor }}
            >
              {/* Left content */}
              <div className="flex flex-col justify-between p-8 md:p-14 flex-1 lg:max-w-[55%] text-white">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-16">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-[#0A0A0A] text-xs font-semibold px-5 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + description */}
                <div className="mt-auto">
                  <h3 className="text-[24px] md:text-[32px] font-medium text-white leading-[1.1] mb-10 tracking-tight">
                    {study.title}
                  </h3>

                  <p className="text-[15px] md:text-[16px] text-white/85 leading-[1.6] mb-8 max-w-[560px]">
                    {study.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center py-4 md:py-5 rounded-2xl font-semibold text-[15px] bg-white"
                    style={{ color: study.bgColor }}
                  >
                    Visit Project
                  </a>
                </div>
              </div>

              {/* Right image panel */}
              {study.hasImage && (
                <div className="hidden md:flex flex-[0.95] p-4 pl-0">
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-white/10 ring-1 ring-white/15">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
