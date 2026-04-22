const stats = [
  {
    label: "Projects Delivered",
    value: "10+",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
  },
  {
    label: "Clients Worldwide",
    value: "5+",
  },
  {
    label: "Years of Experience",
    value: "2+",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="about-heading"
    >
      {/* Main Container - Reduced the gap to keep elements closer */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* ================= LEFT DIV ================= */}
        {/* Replaced w-1/5 with a fixed width (lg:w-[180px]) so it doesn't push the right side too far away on large screens. Added a slight mt-2 to align the text with the cap-height of the large heading. */}
        <div className="w-full lg:w-[180px] shrink-0 mt-2">
          <p className="flex items-center text-[14px] font-medium text-black">
            <span className="text-[#fe5537] text-[18px] leading-none mr-2 mt-[-1px]">
              •
            </span>
            About Devify Labs
          </p>
        </div>

        {/* ================= RIGHT DIV ================= */}
        {/* Used flex-1 to allow this div to stretch and take up all the remaining space, increasing its width. */}
        <div className="flex-1">
          {/* Main paragraph */}
          <p
            id="about-heading"
            className="max-w-[1150px] text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.02em] text-black mb-12 md:mb-16"
          >
            We don't just build products. We build digital ecosystems.
          </p>

          <p className="max-w-[980px] text-[16px] md:text-[18px] text-[#4B5563] leading-[1.65] mb-12 md:mb-16">
            Devify Labs is a Mangalore-based digital studio working with
            startups, SaaS platforms, e-commerce brands, and growth-stage
            businesses worldwide. We design, develop, and deliver - from your
            first landing page to a fully scaled web or mobile application.
            Every product we build is engineered for performance, designed for
            users, and built to grow with your business. Based in India. Built
            for the world.
          </p>

          {/* Stats grid - Max width applied to keep it contained nicely under the paragraph */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-10 max-w-[1150px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                {/* Stat label with blue bullet */}
                <p className="flex items-center text-[13px] font-medium text-black mb-3">
                  <span className="text-[#fe5537] text-[18px] leading-none mr-2 mt-[-1px]">
                    •
                  </span>
                  {stat.label}
                </p>

                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-[#E5E5E5] mb-4" />

                {/* Stat value */}
                <p
                  className="text-[64px] md:text-[80px] font-medium leading-none tracking-[-0.03em] text-[#fe5537]"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
