import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: <RocketIcon />,
    title: "AI Agentic Automation",
    description:
      "Automate repetitive workflows with AI agents that can research, respond, execute tasks, and hand off results in real time. We design and deploy agentic systems that reduce manual effort, improve speed, and scale operations across teams.",
  },
  {
    number: "02",
    icon: <ContentIcon />,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform iOS & Android apps, built for performance and designed for real users. From MVP to market-ready - we take your idea the full distance.",
  },
  {
    number: "03",
    icon: <SocialIcon />,
    title: "Web Application Development",
    description:
      "Complex workflows, SaaS platforms, dashboards, and custom tools - we architect and develop web applications that are scalable, secure, and built for long-term use.",
  },
  {
    number: "04",
    icon: <AdsIcon />,
    title: "UI/UX Design",
    description:
      "Interfaces that feel as good as they look. We design user experiences grounded in research, clarity, and conversion - not just aesthetics.",
  },
  {
    number: "05",
    icon: <EmailIcon />,
    title: "Search Engine Optimization",
    description:
      "We build SEO foundations that compound over time - technical audits, on-page strategy, and content planning that puts your product in front of the right audience.",
  },
  {
    number: "06",
    icon: <AnalyticsIcon />,
    title: "Shopify & WordPress Development",
    description:
      "We build high-converting Shopify stores and scalable WordPress websites tailored to your business goals. From custom themes and integrations to speed optimisation and ongoing support, we deliver platforms that are easy to manage and built to grow.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            <p className="section-label mb-5">Services</p>
            <h2
              id="services-heading"
              className="text-[32px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] max-w-[420px]"
            >
              Everything You Need to Build & Grow.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 lg:pt-20">
            <p className="text-[16px] leading-[1.6] text-[#6B6B6B] max-w-[580px] lg:text-right">
              From the first wireframe to a fully launched product - we handle
              design, development, and digital growth so you don't have to piece
              it together.
            </p>
            <Link
              href="/contact"
              className="btn-blue inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#F2F2F2] rounded-[24px] p-7 flex flex-col gap-0 card-hover relative overflow-hidden min-h-[260px]"
              role="article"
              aria-label={service.title}
            >
              {/* Watermark number */}
              <div
                className="absolute top-3 right-5 card-number select-none pointer-events-none"
                aria-hidden="true"
              >
                {service.number}
              </div>

              {/* Blue dot */}
              <div className="w-2 h-2 rounded-full bg-[#fe5537] mb-auto" />

              {/* Icon + content pushed to bottom */}
              <div className="mt-auto flex flex-col gap-3 pt-16">
                <div className="w-9 h-9 flex items-center justify-center text-[#0A0A0A]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#0A0A0A] leading-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#6B6B6B] leading-[1.55]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Service icons — clean line icons to match the design */
function RocketIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4C16 4 22 8 22 16C22 22 16 28 16 28C16 28 10 22 10 16C10 8 16 4 16 4Z"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3" stroke="#0A0A0A" strokeWidth="1.8" />
      <path
        d="M10 16H4L7 13L7 19L10 16Z"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 16H28L25 19L25 13L22 16Z"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="28"
        rx="3"
        stroke="#0A0A0A"
        strokeWidth="1.8"
      />
      <rect x="8" y="10" width="12" height="2" rx="1" fill="#0A0A0A" />
      <rect x="8" y="15" width="16" height="2" rx="1" fill="#0A0A0A" />
      <rect x="8" y="20" width="10" height="2" rx="1" fill="#0A0A0A" />
      <path
        d="M22 22L26 26"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="4" stroke="#0A0A0A" strokeWidth="1.8" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="16" r="4" stroke="#0A0A0A" strokeWidth="1.8" />
      <circle cx="24" cy="8" r="4" stroke="#0A0A0A" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="4" stroke="#0A0A0A" strokeWidth="1.8" />
      <line
        x1="11.5"
        y1="14"
        x2="20.5"
        y2="9.5"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <line
        x1="11.5"
        y1="18"
        x2="20.5"
        y2="22.5"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AdsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20L10 14L14 18L20 10L28 20"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 8L28 8L28 11"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="24" width="24" height="2" rx="1" fill="#0A0A0A" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="8"
        width="24"
        height="18"
        rx="3"
        stroke="#0A0A0A"
        strokeWidth="1.8"
      />
      <path
        d="M4 11L16 18L28 11"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="20"
        width="6"
        height="8"
        rx="2"
        stroke="#0A0A0A"
        strokeWidth="1.8"
      />
      <rect
        x="13"
        y="14"
        width="6"
        height="14"
        rx="2"
        stroke="#0A0A0A"
        strokeWidth="1.8"
      />
      <rect
        x="22"
        y="8"
        width="6"
        height="20"
        rx="2"
        stroke="#0A0A0A"
        strokeWidth="1.8"
      />
      <path
        d="M7 16L16 10L25 5"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
