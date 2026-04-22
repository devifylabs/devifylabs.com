"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(href, { scroll: false });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => {
      router.push(href, { scroll: false });
    }, 280);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* 3-column grid: logo | nav (truly centred) | cta */}
      <nav
        className="max-w-350 mx-auto flex items-center justify-between md:grid md:grid-cols-3"
        aria-label="Main navigation"
      >
        {/* ── Left: Logo + wordmark ── */}
        <Link
          href="/"
          onClick={(event) => handleNavClick(event, "/")}
          className="flex items-center gap-2.5 shrink-0 min-w-0"
          aria-label="Devify Labs home"
        >
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={32}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-8 w-auto text-black"
          />
        </Link>

        {/* ── Center: Nav pill — absolutely centred via justify-self ── */}
        <div className="justify-self-center hidden md:flex">
          <div
            className="rounded-full px-1.5 py-0 flex items-center gap-0.5 bg-gray-300/50 backdrop-blur-sm"
            // style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="px-5 py-2.5 text-[13.5px] font-medium text-black hover:text-[#fe5537] "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Right: CTA ── */}
        <div className="flex justify-end items-center gap-3">
          <Link
            href="https://cal.com/devifylabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-[13.5px] font-medium text-white rounded-full bg-[#fe5537] hover:bg-[#e24a30] "
          >
            {/* bg-gradient-to-r from-[#fe5537] to-[#e24a30] 
    backdrop-blur-md border border-white/10 
    shadow-[0_8px_30px_rgba(30,58,255,0.35)] 
    hover:shadow-[0_10px_40px_rgba(30,58,255,0.45)] 
    transition-all duration-300" */}
            Book a Call
            <ArrowUpRight size={16} className="ml-2" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="w-5 h-0.5 bg-[#0A0A0A] block rounded-full" />
            <span className="w-5 h-0.5 bg-[#0A0A0A] block rounded-full" />
            <span className="w-3.5 h-0.5 bg-[#0A0A0A] block rounded-full" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-3 max-w-350 mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-xl p-2"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  setIsMenuOpen(false);
                  handleNavClick(event, link.href);
                }}
                className="px-4 py-3 text-[14px] font-medium text-black hover:text-[#fe5537]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://cal.com/devifylabs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-[14px] font-medium text-white rounded-full bg-[#fe5537] hover:bg-[#e24a30]"
            >
              Book a Call
              <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="#0A0A0A" />
      {/* Infinity / figure-8 loop — matches Marketra style */}
      <path
        d="M10 20 C10 15 14 12 18 12 C22 12 23.5 15 26 20 C28.5 25 30 28 34 28 C37 28 38.5 25.5 38.5 23"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        transform="scale(0.72) translate(3, 3)"
      />
      <path
        d="M38 20 C38 25 34 28 30 28 C26 28 24.5 25 22 20 C19.5 15 18 12 14 12 C11 12 9.5 14.5 9.5 17"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        transform="scale(0.72) translate(3, 3)"
      />
    </svg>
  );
}
