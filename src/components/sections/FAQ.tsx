"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does Devify Labs offer?",
    answer:
      "We offer end-to-end digital solutions including Website Design & Development, Web Application Development, iOS & Android Mobile App Development, UI/UX Design, Search Engine Optimisation, and Performance Marketing. Whether you need to launch a product or scale one, we've got you covered.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
  {
    question:
      "Do you work with early-stage startups or only established businesses?",
    answer:
      "Both. We've helped founders launch their first product from scratch and helped established businesses rebuild and scale their digital infrastructure. Our process adapts to your stage and budget.",
    authorName: "David Chen",
    authorImage: "/images/faq/man.png",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard website takes 2-4 weeks. A web or mobile application typically ranges from 6-16 weeks depending on complexity. We'll give you a clear timeline before any work begins - no surprises.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, and iterative development after launch. Most of our clients choose to continue working with us well beyond the initial delivery.",
    authorName: "David Chen",
    authorImage: "/images/faq/man.png",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "You'll have a dedicated point of contact throughout. We work with Slack, email, or WhatsApp - whatever fits your workflow. You'll receive regular progress updates and have direct access to the team at every stage.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column: Heading and CTA Box */}
          <div className="w-full lg:w-[40%] flex flex-col">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fe5537]" />
              <span className="text-[13px] font-bold tracking-wide text-[#0A0A0A] uppercase">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] md:text-[52px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-10 max-w-[350px]">
              We've got the answers.
            </h2>

            {/* CTA Box */}
            <div className="bg-[#0A0A0A] rounded-[24px] p-8 md:p-10 flex flex-col mt-auto shadow-lg relative overflow-hidden">
              <h3 className="text-white text-[28px] md:text-[32px] font-medium leading-[1.15] tracking-[-0.02em] mb-8 relative z-10">
                Can't find what you're looking for?
              </h3>

              <Link
                href="/contact"
                className="w-full bg-white text-[#0A0A0A] font-semibold py-4 rounded-full text-center hover:bg-gray-50 transition-colors mb-6 relative z-10"
              >
                Talk to a human
              </Link>

              <p className="text-white/80 text-[13px] leading-relaxed relative z-10 font-medium">
                We respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border border-[#E5E5E5] rounded-[16px] overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#F5F5F5] border-transparent"
                      : "bg-white hover:border-[#fe5537]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 md:px-8 md:py-7 flex items-center justify-between text-left gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] md:text-[19px] font-medium text-[#0A0A0A] tracking-[-0.01em] pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-[#0A0A0A] transition-transform duration-300 group-hover:text-[#fe5537]">
                      {isOpen ? (
                        <ChevronUp size={20} className="opacity-60" />
                      ) : (
                        <ChevronDown size={20} className="opacity-60" />
                      )}
                    </span>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0">
                        <p className="text-[#6B6B6B] text-[15px] leading-[1.6] pr-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
