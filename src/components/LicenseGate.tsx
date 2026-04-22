/**
 * LicenseGate — wraps the entire app.
 * Visible, honest, removable. No tricks.
 */
import { getLicenseStatus } from "@/lib/license";

export default function LicenseGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const status = getLicenseStatus();

  if (status.active) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="max-w-md text-center px-8 py-12 rounded-2xl border border-white/10 bg-white/[0.03]">
        {/* Logo */}
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <path
              d="M10 20 C10 15 14 12 18 12 C22 12 23.5 15 26 20 C28.5 25 30 28 34 28"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M38 20 C38 25 34 28 30 28 C26 28 24.5 25 22 20 C19.5 15 18 12 14 12"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <h1 className="text-white text-[22px] font-semibold tracking-tight mb-3">
          Devify Labs
        </h1>
        <p className="text-white/40 text-[13px] uppercase tracking-[0.15em] font-medium mb-6">
          Awaiting Activation
        </p>
        <p className="text-white/60 text-[14px] leading-relaxed mb-8">
          This site has been built and is ready for launch. Activation is
          pending final handover. Contact{" "}
          <a
            href="mailto:nishalpoojary09@gmail.com"
            className="text-[#fe5537] hover:text-[#e24a30] underline underline-offset-2"
          >
            nishalpoojary09@gmail.com
          </a>{" "}
          to complete the process.
        </p>

        <div className="text-[11px] text-white/20 border-t border-white/10 pt-6">
          Site owner: set{" "}
          <code className="bg-white/10 px-1.5 py-0.5 rounded text-white/40">
            NEXT_PUBLIC_LICENSE_KEY
          </code>{" "}
          in your environment to activate.
        </div>
      </div>
    </div>
  );
}
