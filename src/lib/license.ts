/**
 * LICENSE GATE — Transparent activation system.
 *
 * HOW IT WORKS (documented for client):
 * - App checks NEXT_PUBLIC_LICENSE_KEY env var at runtime.
 * - Without a valid key → site shows "Awaiting Activation" screen.
 * - Client receives the key upon final payment.
 * - Client can then remove this file + gate entirely — full ownership.
 *
 * This mechanism is agreed upon in the project contract.
 * There are NO hidden actions, NO data deletion, NO malicious code.
 */

const VALID_KEYS = (process.env.LICENSE_KEYS ?? "")
  .split(",")
  .map((k) => k.trim())
  .filter(Boolean);

export function isLicensed(): boolean {
  const key = process.env.NEXT_PUBLIC_LICENSE_KEY ?? "";
  if (!key) return false;
  return VALID_KEYS.includes(key);
}

export type LicenseStatus =
  | { active: true }
  | { active: false; reason: string };

export function getLicenseStatus(): LicenseStatus {
  if (isLicensed()) return { active: true };
  return {
    active: false,
    reason:
      "Site not yet activated. If you are the site owner, set NEXT_PUBLIC_LICENSE_KEY in your environment variables.",
  };
}
